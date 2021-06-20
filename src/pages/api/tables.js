
import { colorStyle } from 'styled-system';
import TablesScheme from '../../models/tables'
import Connnect from '../../config/db'
Connnect()
export default  async  (req, res) => {
    switch(req.method){
        case "POST":
            await createTable(req, res)
            break;
        case "GET":
            await tables(req, res)
            break;
        case "PUT":
            await updateTable(req, res)
            break;   
    }
  }

  const createTable = async (req, res) => {
      const data = req.body
    try{
        const table =  new TablesScheme(data)
        const tableData =  await table.save()
        res.json({
            status: 'success',
            tableData
        })
    }catch (err) {
        return res.status(500).json({err: err.message})
    }
  }

  const updateTable = async (req, res) => {
    const data = req.body
    const params  = {
        tableScheme: {
            appointment_schedule: {
                info_user: {
                    name: data.name,
                    sdt: data.sdt
                },
                startTime: data.startTime,
            },
        },
        isBook: data.isBook,
        number: 1,
    }
    console.log(params)
    try{
        const tableScheme = await TablesScheme.findOneAndUpdate({ _id: data.id }, params)
          // Check if record exists in db
          if ( tableScheme != null ) {
            res.json({
                status: 'success'
            })
          }
         
        
    }catch (err) {
        return res.status(500).json({err: err.message})
    }
}

  const tables = async (req, res) => {
  try{

    const tables =  await TablesScheme.find()
    res.json({
        status: 'success',
        tables
    })
  }catch (err) {
      return res.status(500).json({err: err.message})
  }
}