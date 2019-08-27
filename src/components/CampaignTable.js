import React, { useContext } from "react";
import { useStyles } from "../styles/campaginTable";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CampaignContext from "../CampaignContext";

const CampaignTable = props => {
  const classes = useStyles();
  const campaigns = useContext(CampaignContext);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell>Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Budget</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.data.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>
                {Date.parse(row.endDate) < new Date() ? "Inactive" : "Active"}
              </TableCell>
              <TableCell>{row.Budget}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CampaignTable;
