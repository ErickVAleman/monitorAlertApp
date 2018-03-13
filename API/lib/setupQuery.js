'use strict'

const codewincajadb = require('./db')

module.exports = function (config) {
  const db = codewincajadb(config)

  async function findAll () {
    const query = `SELECT Articulo, CodigoBarras, Nombre, c_ClaveProdServ FROM Articulos WHERE LEN(c_ClaveProdServ) < 8`
    const rows = db.query(query, { type: db.QueryTypes.SELECT })
    return rows
  }

  async function findAllNoUtility (config, almacen, tienda) {
    const db = codewincajadb(config)
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
    `
    const rows = db.query(query, { type: db.QueryTypes.SELECT })

    return rows
  }

  return {
    findAll,
    findAllNoUtility
  }
}
