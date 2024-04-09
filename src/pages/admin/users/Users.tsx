import { getUserss } from "@/hooks/getDataFirebase";
import {
  Box,
  Checkbox,
  HStack,
  Icon,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Container,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import ManualClose from "./deleteModal";
import EditUserModal from "./editUserModal";
import { User } from "firebase/auth";
import { Columns, columns } from "./user.data";

const Users = (props: TableProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const [columnsUser, setColumnsUser] = useState<Columns[]>(columns);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const getFirebaseUser = (arrayUsers: User[] | any) => {
      console.log("escuchar continuamente", arrayUsers);
      setUsers(arrayUsers);
    };
    getUserss(getFirebaseUser);
    checkColumnsUser();
  }, []);

  const checkColumnsUser = () => {
    const columnCopy: Columns[] = isMobile ? columns.filter(col => col.column != 'Email') : columns;
    setColumnsUser(columnCopy)
  }

  return (
    <div className="bg-white w-[70%]  my-5 flex items-center justify-center rounded-lg">
      <Container py={{ base: "4", md: "8" }} px={{ base: "0", md: 0 }} className="flex items-center justify-center">
        <Box
          bg="bg-surface"
          boxShadow={{ base: "none", md: "sm" }}
          borderRadius={{ base: "none", md: "lg" }}
        >
          <Stack spacing="5">
            <Box px={{ base: "4", md: "6" }} pt="5">
              <Stack
                direction={{ base: "column", md: "row" }}
                justify="space-between"
              >
                <Text fontSize="lg" fontWeight="medium">
                  Usuarios
                </Text>
              </Stack>
            </Box>

            <div >
              <Table>
                <Thead display={isMobile ? "contents" : ""}>
                  <Tr>
                    {columnsUser.map((column: Columns, index) => (
                      <Th key={index}>
                        {column.column}
                      </Th>
                    ))}
                  </Tr>
                </Thead>

                <Tbody>
                  {users.map((member: any) => (
                    <Tr key={member.id}>
                      <Td>
                        <HStack spacing="3">
                          <Box>
                            <Text fontWeight="medium">{member.name}</Text>
                          </Box>
                        </HStack>
                      </Td>
                      <Td display={isMobile ? "none" : ""}>
                        <Text color="muted">{member.email}</Text>
                      </Td>
                      <Td>
                        <Text color="muted">{member.role}</Text>
                      </Td>
                      <Td>
                        <HStack spacing="1">
                          <ManualClose dataUser={member} />
                          <EditUserModal dataUser={member} />
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </div>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Users;
