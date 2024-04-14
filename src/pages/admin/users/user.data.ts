export const columns: Columns[] = [
    {
        column: "Nombre"
    },
    {
        column: "Email",
    },
    {
        column: "rol",
    },
    {
        column: "action",
    },
];

export interface Columns {
    column: string;
}

//old
//   const colums = [
//     {
//       colum: (
//         <HStack spacing="3">
//           <Checkbox />
//           <HStack spacing="1">
//             <Text>Nombre</Text>
//             <Icon as={IoArrowDown} color="muted" boxSize="4" />
//           </HStack>
//         </HStack>
//       ),
//     },
//     {
//       colum: "Email",
//     },
//     {
//       colum: "rol",
//     },
//     {
//       colum: "action",
//     },
//   ];