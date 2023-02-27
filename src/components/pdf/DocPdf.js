import React , { useEffect, useState } from "react";
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import API from '../../api'

const DocPdf = () => {
    
    const [items, setItems] = useState([])

    useEffect(() => {
        filterAll()
      }, [])

    const filterAll = async () => {
        const response = await API.Item.all()
        if (response.result) {
          setItems(response.result)
          console.log(response.result)
        } else {
          setItems([])
        }
    };

    const createTableRow = (description, code, company, valueCellWidth) => {
        
        let tableColStyle = {
          width: `${valueCellWidth}%`,
          borderStyle: "None",
          borderColor: "#000",
          borderWidth: 0,
        };
    
        return (
          <View style={tableRowStyle} fixed>
            <View style={tableColStyle}>
              <Text style={tableCellStyle}>{description}</Text>
            </View>
    
            <View style={tableColStyle}>
              <Text style={tableCellStyle}>{code}</Text>
            </View>

            <View style={tableColStyle}>
              <Text style={tableCellStyle}>{company}</Text>
            </View>
    
          </View>
        );
    };

    const createHeaderRow = (description, code, company,headerCellWidth) => {
        let tableColHeaderStyle = {
          width: `${headerCellWidth}%`,
          borderStyle: "solid",
          borderColor: "#FFFFFF",
          borderBottomColor: "#FFFFFF",
          borderWidth: 2,
          backgroundColor: "#FBC848",
        };
    
        return (
          <View style={tableRowStyle} fixed>
            <View style={tableColHeaderStyle}>
              <Text style={tableCellHeaderStyle}>{description}</Text>
            </View>
    
            <View style={tableColHeaderStyle}>
              <Text style={tableCellHeaderStyle}>{code}</Text>
            </View>

            <View style={tableColHeaderStyle}>
              <Text style={tableCellHeaderStyle}>{company}</Text>
            </View>
    
          </View>
        );
    };
    
      return (
        <Document>
          <Page style={pageStyle} size="A4" orientation="portrait">
          <View style={tableStyle}>
                <Text>
                    {"\n\n\n\n"}
                </Text>
            </View>
            <View style={tableStyle}>
                <Text style={tableCelFontStyle}>
                    Listado de Items
                </Text>
            </View>
            <View style={tableStyle}>
                <Text>
                    {"\n\n"}
                </Text>
            </View>
            <View style={tableStyle}>
              {createHeaderRow("Descricion","Codigo", "Empresa",40)}
            </View>
            <View style={tableStyle}>
                {items.map((item) => (
                    createTableRow(item.description,item.code, item.company.name,40)
                ))}
            </View>
          </Page>
        </Document>
      );
};
    
    const pageStyle = {
      paddingTop: 16,
      paddingHorizontal: 40,
      paddingBottom: 56,
    };
    
    const tableStyle = {
      display: "table",
      width: "auto",
    };
    
    const tableRowStyle = {
      flexDirection: "row",
    };
    
    const tableCellHeaderStyle = {
      textAlign: "center",
      margin: 4,
      fontSize: 10,
      fontWeight: "bold",
    };

    const tableCelFontStyle = {
        fontSize: 14,
        fontWeight: "bold",
        color: "#998970"
      };
    
    const tableCellStyle = {
      textAlign: "center",
      margin: 5,
      fontSize: 10,
      color: "#998970"
    };

export default DocPdf;