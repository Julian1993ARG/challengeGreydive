import { utils, writeFile, write } from 'xlsx'
import fileSaver from 'file-saver'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { randomName } from '@/utils'

interface Props {
  data: any
}

export default function AsDataExel ({ data }: Props) {
  const handleClick = () => {
    if (!data) return Swal.fire('Error', 'No hay datos para exportar', 'error')
    const sheet = utils.json_to_sheet(data)
    const workbook = {
      Sheets: {
        data: sheet,
      },
      SheetNames: ['data'],
    }
    writeFile(workbook, `${randomName()}.xlsx`)
    write(workbook, { type: 'base64' })
  }

  return (
    <>
      <Button type='button' variant='info' onClick={handleClick}>Descarga Exel</Button>
    </>
  )
}
