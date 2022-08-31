import React, { useEffect, useState } from "react";
import Calculations from "./Calculations/Calculations";
import { v4 as uuidv4 } from "uuid";
import OutputBox from "./Output/OutputBox";
import InputTable from "./Input/InputTable";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Filter from "./Calculations/Filter";

function MainInput() {
  const [enteredData, setEnteredData] = useState("");
  const [enteredTotal, setEnteredTotal] = useState("");
  const [mainData, setMainData] = useState([]);
  const [update, setUpdate] = useState("");
  const [found, setFound] = useState([]);
  const [unused, setUnused] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    calculateHandler();
    clearError();
  }, [update]);

  function enteredDataHandler(data) {
    setEnteredData(data);
  }

  function enteredTotalHandler(data) {
    setEnteredTotal(data);
  }

  function enteredButtonHandler() {
    clearError();
    const temp = Filter(enteredData);
    temp.length === 0
      ? setError("No Data Entered")
      : temp.map((item) =>
          setMainData((oldData) => [...oldData, { id: uuidv4(), data: item }])
        );
    setEnteredData("");
  }

  function clearHandler() {
    setEnteredData("");
    setEnteredTotal("");
    setMainData([]);
    setFound([]);
    setUnused([]);
    setError("");
  }

  function calculateHandler() {
    clearError();
    enteredTotal.length === 0 && setError("Enter Total Value");
    mainData.length === 0 && setError("No Data Entered");
    const [returnedFound, returnedUnused] = Calculations(
      mainData,
      enteredTotal
    );

    setFound(
      returnedFound.map((item) => {
        return { id: uuidv4(), data: item };
      })
    );
    setUnused(
      returnedUnused.map((item) => {
        return { id: uuidv4(), data: item };
      })
    );
  }

  function DeleteItem(event) {
    const dataId = event.currentTarget.dataset.id;
    setMainData((oldData) => oldData.filter((value) => value.id !== dataId));
    setUpdate(dataId);
  }

  function clearError() {
    setError("");
  }

  function clear(event) {
    event.currentTarget.dataset.id === "inp"
      ? setEnteredData("")
      : setEnteredTotal("");
  }

  function paste(event) {
    const dataId = event.currentTarget.dataset.id;
    navigator.clipboard
      .readText()
      .then((data) =>
        dataId === "inp" ? setEnteredData(data) : setEnteredTotal(data)
      );
  }

  return (
    <Flex
      justifyContent="center"
      align="top"
      direction={{ base: "column", xl: "row" }}
      minH="929"
      overflow="hidden"
    >
      <Box
        w={"100vw"}
        h={"100vh"}
        position="fixed"
        zIndex="0"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage="url('https://images.unsplash.com/photo-1601045378965-58f245425f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80')"
      />
      <Box
        zIndex={1}
        mx={["auto", "auto", "auto", "auto", "2"]}
        w={["100vw", "460px", "512px", "512px", "512px"]}
        align="right"
      >
        <InputTable
          enteredDataHandler={enteredDataHandler}
          enteredData={enteredData}
          enteredButtonHandler={enteredButtonHandler}
          calculateHandler={calculateHandler}
          clearHandler={clearHandler}
          enteredTotalHandler={enteredTotalHandler}
          enteredTotal={enteredTotal}
          error={error}
          name="Lemara Invoice Checker"
          clear={clear}
          paste={paste}
        />
        <OutputBox name="Found Sequences" data={found} />
      </Box>
      <Stack
        zIndex={1}
        mx={["auto", "auto", "auto", "auto", "0"]}
        w={["100vw", "460px", "512px", "512px", "608px"]}
        align="top"
        direction={["column", "column", "column", "column", "row"]}
      >
        <Box>
          <OutputBox name="Entered Data" data={mainData} delete={DeleteItem} />
        </Box>
        <Box>
          <OutputBox name="Unused" data={unused} />
        </Box>
      </Stack>
    </Flex>
  );
}

export default MainInput;
