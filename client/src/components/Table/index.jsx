import React from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from "@chakra-ui/react";

const GenericTable = (data) => {
  console.log(data);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Player</Th>
            <Th>Class</Th>
            <Th isNumeric>Job Level</Th>
          </Tr>
        </Thead>
        {data.data.data.map((player, key) => (
          <Tbody>
            <Tr>
              <Td>{player.name}</Td>
              <Td>{player.class}</Td>
              <Td isNumeric>{player.job_level}</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </TableContainer>
  );
};

export default GenericTable;
