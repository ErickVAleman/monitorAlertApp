"use strict";

const codewincajadb = require("./db");

module.exports = function(config) {
  const db = codewincajadb(config);

  async function findByNoClaveSat() {
    const query = `SELECT Articulo, CodigoBarras, Nombre, c_ClaveProdServ FROM Articulos WHERE LEN(c_ClaveProdServ) < 8`;
    const rows = db.query(query, { type: db.QueryTypes.SELECT });
    return rows;
  }

  async function findByNoUtility(config, almacen, tienda) {
    const db = codewincajadb(config);
    const query = `
      DECLARE @Almacen INT  = ${almacen}
      DECLARE @Tienda INT   = ${tienda}
      
      SELECT
        Almacen,Tienda,Subfamilia,DescripcionSubfamilia
        ,Articulo,Nombre,ExistenciaActualRegular
        ,UltimoCostoNeto, Precio1IVAUV = ISNULL(Precio1IVAUV,0.00)
        ,Utilidad = CASE WHEN Precio1IVAUV = 0 THEN 0.00 ELSE  ISNULL( (1 - (UltimoCostoNeto/Precio1IVAUV)) , 0.00) END
      FROM QVListaprecioConCosto
      WHERE Almacen = @Almacen AND Tienda = @Tienda
        AND CASE WHEN Precio1IVAUV = 0 THEN 0.00 ELSE  ISNULL( (1 - (UltimoCostoNeto/Precio1IVAUV)) , 0.00) END < 0.08
        AND ExistenciaActualRegular > 0
    `;
    const rows = db.query(query, { type: db.QueryTypes.SELECT });

    return rows;
  }

  async function cotizacion (config){
    const db = codewincajadb(config);
    const query = `
    DECLARE @CedisTienda INT = 6, @CedisAlmacen INT = 21, @Cotizacion NVARCHAR(20) = '20180103-120'
    SELECT AR.CodigoBarras,COTI.*
        ,ESTA.ExistUV,ESTA.ExistUC,ESTA.StockMinimoActUV,ESTA.StockMinimoActUC,ESTA.StockMinimoTriUV,ESTA.StockMinimoTriUC
        ,PedidoSugeridoActCAL = CASE WHEN ( ESTA.StockMinimoActUC - ESTA.ExistUC ) - FLOOR( ESTA.StockMinimoActUC - ESTA.ExistUC ) >= 0.50 THEN (CASE WHEN (FLOOR( ESTA.StockMinimoActUC - ESTA.ExistUC ) + 1) >= 0 THEN FLOOR( ESTA.StockMinimoActUC - ESTA.ExistUC ) + 1 ELSE 0 END) ELSE (CASE WHEN FLOOR( ESTA.StockMinimoActUC - ESTA.ExistUC ) >= 0 THEN FLOOR( ESTA.StockMinimoActUC - ESTA.ExistUC ) ELSE 0 END) END
        ,PedidoSugeridoTriCAL = CASE WHEN ( ESTA.StockMinimoTriUC - ESTA.ExistUC ) - FLOOR( ESTA.StockMinimoTriUC - ESTA.ExistUC ) >= 0.50 THEN (CASE WHEN (FLOOR( ESTA.StockMinimoTriUC - ESTA.ExistUC ) + 1) >= 0 THEN FLOOR( ESTA.StockMinimoTriUC - ESTA.ExistUC ) + 1 ELSE 0 END) ELSE (CASE WHEN FLOOR( ESTA.StockMinimoTriUC - ESTA.ExistUC ) >= 0 THEN FLOOR( ESTA.StockMinimoTriUC - ESTA.ExistUC ) ELSE 0 END) END
        ,ExistZaragoza = EZ.ExistUC, MinZaragoza = EZ.StockMinimoActUC, MinTriZaragoza = EZ.StockMinimoTriUC
        ,ExistVictoria = EV.ExistUC, MinVictoria = EV.StockMinimoActUC, MinTriVictoria = EV.StockMinimoTriUC
        ,ExistOluta = EO.ExistUC, MinOluta = EO.StockMinimoActUC, MinTriOluta = EO.StockMinimoTriUC
        ,ExistJaltipan = EJ.ExistUC, MinJaltipan = EJ.StockMinimoActUC, MinTriJaltipan = EJ.StockMinimoTriUC
        ,ExistBodega = EB.ExistUC
    FROM (
        SELECT
            Prioridad,Tipo,Marca,
            Cotizacion,Fecha,DescripcionSubfamilia,
            Articulo,Nombre,Relacion,
            COALESCE(ZARAGOZA,0) AS ZARAGOZA,
            COALESCE(VICTORIA,0) AS VICTORIA,
            COALESCE(OLUTA,0) AS OLUTA,
            COALESCE(JALTIPAN,0) AS JALTIPAN,
            COALESCE(ZARAGOZA,0) + COALESCE(VICTORIA,0) + COALESCE(OLUTA,0) + COALESCE(JALTIPAN,0) AS TOTAL
        FROM (
            SELECT Prioridad,Tipo,Marca
                ,DescripcionSubfamilia,Clave,Fecha,Cotizacion
                ,Estatus,Sucursal,Articulo,Nombre,UnidadesUC,Relacion
            FROM SPABODEGA.dbo.OrderListaCotizacionGlobarFunction(@CedisTienda,@CedisAlmacen,@Cotizacion)
        ) SOURCE
        PIVOT (
            SUM(SOURCE.UnidadesUC) FOR SOURCE.Sucursal IN (ZARAGOZA,VICTORIA,OLUTA,JALTIPAN)
        ) AS PIVOTABLE
    ) AS COTI
    LEFT JOIN (
        SELECT Articulo
            ,ExistUV = SUM(ExistUV), ExistUC = SUM(ExistUC)
            ,StockMinimoActUV = SUM(StockMinimoActUV), StockMinimoActUC = SUM(StockMinimoActUC)
            ,StockMinimoTriUV = SUM(StockMinimoTriUV), StockMinimoTriUC = SUM(StockMinimoTriUC)
        FROM CA2015.dbo.UNODOSCERO
        GROUP BY Articulo
    ) AS ESTA ON ESTA.Articulo = COTI.Articulo
    LEFT JOIN CA2015.dbo.UNODOSCERO EZ ON EZ.Articulo = COTI.Articulo AND EZ.Almacen = 2 AND EZ.Tienda = 1
    LEFT JOIN CA2015.dbo.UNODOSCERO EV ON EV.Articulo = COTI.Articulo AND EV.Almacen = 3 AND EV.Tienda = 2
    LEFT JOIN CA2015.dbo.UNODOSCERO EO ON EO.Articulo = COTI.Articulo AND EO.Almacen = 19 AND EO.Tienda = 5
    LEFT JOIN CA2015.dbo.UNODOSCERO EJ ON EJ.Articulo = COTI.Articulo AND EJ.Almacen = 7 AND EJ.Tienda = 4
    LEFT JOIN CA2015.dbo.UNODOSCERO EB ON EB.Articulo = COTI.Articulo AND EB.Almacen = 21 AND EB.Tienda = 6
    LEFT JOIN SPABODEGA.dbo.Articulos AR ON AR.Articulo = COTI.Articulo
    ORDER BY Prioridad,Tipo,Marca,Articulo
    
    
    Añadir comentarioContraer 
    `
  }

  return {
    findByNoClaveSat,
    findByNoUtility
  };
};
