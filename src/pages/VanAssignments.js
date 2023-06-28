import { Box } from "@mui/material";
import AssociateCard from "../components/AssociateCard";
import DropComponent from "../components/dropComponent";

export default function VanAssignments() {
    return (
        <Box>
            <h1>Welcome to the Van Log</h1>

            <AssociateCard text="im draggable" />
            <AssociateCard text="im draggable" />
            <AssociateCard text="im draggable" />
            <AssociateCard text="im draggable" />
            <AssociateCard text="im draggable" />
           
            <DropComponent />


        </Box>
    );
}