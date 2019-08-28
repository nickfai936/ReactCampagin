import React, { useState, useContext, useEffect } from "react";
import { useStyles } from "../styles/campaginTable";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CampaignContext from "../CampaignContext";
import CampaignStatus from "./CampaignStatus";

const CampaignTable = props => {
  const classes = useStyles();
  const campaigns = useContext(CampaignContext);
  const selectedDate =
    props.location.state && props.location.state.selectedDate;
  const [availableCampaigns, setAvailableCampaigns] = useState([]);

  useEffect(() => {
    setAvailableCampaigns(
      campaigns.data.filter(
        campaign =>
          !selectedDate.startDate ||
          Date.parse(campaign.startDate) >= selectedDate.startDate
      )
    );
  }, [campaigns, selectedDate]);

  return (
    <div className={classes.tableRoot}>
      <Table>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Budget</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {availableCampaigns.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>
                <CampaignStatus
                  status={Date.parse(row.endDate) >= new Date()}
                />
              </TableCell>
              <TableCell>
                {row.Budget} {campaigns.currencyCode}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CampaignTable;