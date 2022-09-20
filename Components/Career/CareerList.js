import React from "react";
import { UnorderedList, ListItem, Heading } from "@chakra-ui/react";

export default function CareerList(props) {
  return (
    <React.Fragment>
      <Heading fontSize="28" pb="0.5rem">
        {props.name}
      </Heading>
      <UnorderedList pb="2rem">
        {props.items.map((item) => {
          return (
            <ListItem data={props.data} fontSize="18" key={item.text}>
              {item.text}
            </ListItem>
          );
        })}
      </UnorderedList>
    </React.Fragment>
  );
}
