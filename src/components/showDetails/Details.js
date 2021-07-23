import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper, Card } from "@material-ui/core"
import styles from './Details.module.css';

const Details = (props) => {
    return (
        <Card className={styles['table-spacing']} elevation={4}>
        <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.details || []).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    )
}

export default Details;