import { utils, writeFile } from 'xlsx'
import fileSaver from 'file-saver'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

interface Props {
  data: any
}

export default function AsDataExel ({ data }: Props) {
  console.log(data)
  const handleClick = () => {
    if (!data) return Swal.fire('Error', 'No hay datos para exportar', 'error')
    const ws = utils.json_to_sheet(data)
    const wb = utils.book_new()
    utils.book_append_sheet(wb, ws, 'Sheet1')
    const file = writeFile(wb, 'test.xlsx')
    const blob = new Blob([file], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    fileSaver.saveAs(blob, 'test.xlsx')
  }

  return (
    <>
      <Button type='button' variant='info' onClick={handleClick}>Descarga en formato Exel</Button>
    </>
  )
}
