// CASE 3


        var choices13 = question[3].split(",");
        var deneme = question;
        myLeftTextFrame.parentStory.insertionPoints[-1].contents = "\r\n";

        myLeftTextFrame.parentStory.insertionPoints[-1].tables.add({columnCount:6,bodyRowCount:1,appliedTableStyle:app.documents[0].tableStyles.itemByName("TB1")});
        myLeftTextFrame.tables[-1].columns[0].width = 7;
        myLeftTextFrame.tables[-1].columns[1].width = 25.5;
        myLeftTextFrame.tables[-1].columns[2].width = 7;
        myLeftTextFrame.tables[-1].columns[3].width = 25.5;
        myLeftTextFrame.tables[-1].columns[4].width = 7;
        myLeftTextFrame.tables[-1].columns[5].width = 25.5;
        myLeftTextFrame.tables[-1].cells.everyItem().autoGrow = true;

        myLeftTextFrame.tables[-1].columns[0].cells[0].contents = "A)";
        myLeftTextFrame.tables[-1].columns[1].cells[0].contents = choices13[0];
        
        myLeftTextFrame.tables[-1].columns[2].cells[0].contents = "B)";
        myLeftTextFrame.tables[-1].columns[3].cells[0].contents = choices13[1];


        myLeftTextFrame.tables[-1].columns[4].cells[0].contents = "C)";
        myLeftTextFrame.tables[-1].columns[5].cells[0].contents = choices13[2];
 


        myLeftTextFrame.parentStory.insertionPoints[-1].tables.add({columnCount:6,bodyRowCount:1,appliedTableStyle:app.documents[0].tableStyles.itemByName("TB1")});
        myLeftTextFrame.tables[-1].columns[0].width = 16.25;
        myLeftTextFrame.tables[-1].columns[1].width = 7;
        myLeftTextFrame.tables[-1].columns[2].width = 25.5;
        myLeftTextFrame.tables[-1].columns[3].width = 7;
        myLeftTextFrame.tables[-1].columns[4].width = 25.5;
        myLeftTextFrame.tables[-1].columns[5].width = 16.25;
        myLeftTextFrame.tables[-1].cells.everyItem().autoGrow = true;


        myLeftTextFrame.tables[-1].columns[1].cells[0].contents = "D)";
        myLeftTextFrame.tables[-1].columns[2].cells[0].contents = choices13[3];


        myLeftTextFrame.tables[-1].columns[3].cells[0].contents = "E)";
        myLeftTextFrame.tables[-1].columns[4].cells[0].contents = choices13[4];


        myLeftTextFrame.parentStory.insertionPoints[-1].contents = "\n\n";


// CASE 11

        var choices11 = question[3].split(",");

        var zz = 0;
        var choices112 = [];
        for(var lk=0;lk<choices11.length;lk++){
            choices112[zz] = choices11[lk].split("?");
            zz++;
        }

        myLeftTextFrame.parentStory.insertionPoints[-1].contents = "\r\n";
        
        myLeftTextFrame.parentStory.insertionPoints[-1].tables.add({columnCount:2,bodyRowCount:1,appliedTableStyle:app.documents[0].tableStyles.itemByName("TB1")});
        myLeftTextFrame.tables[-1].columns[0].width = 8;
        myLeftTextFrame.tables[-1].columns[1].width = 89.5;
        myLeftTextFrame.tables[-1].cells.everyItem().autoGrow = false;
        myLeftTextFrame.tables[-1].rows.everyItem().height = choices112[0][1];

        myLeftTextFrame.tables[-1].columns[0].cells[0].contents = "A)"
        
        var image = myLeftTextFrame.tables[-1].columns[1].cells[0].insertionPoints[-1].place(choices112[0][0])[0];
        image.fit(FitOptions.CONTENT_TO_FRAME);
        image.fit(FitOptions.PROPORTIONALLY);
        
        myLeftTextFrame.parentStory.insertionPoints[-1].tables.add({columnCount:2,bodyRowCount:1,appliedTableStyle:app.documents[0].tableStyles.itemByName("TB1")});
        myLeftTextFrame.tables[-1].columns[0].width = 8;
        myLeftTextFrame.tables[-1].columns[1].width = 89.5;
        myLeftTextFrame.tables[-1].cells.everyItem().autoGrow = false;
        myLeftTextFrame.tables[-1].rows.everyItem().height = choices112[1][1];

        myLeftTextFrame.tables[-1].columns[0].cells[0].contents = "B)"
        
        var image2 = myLeftTextFrame.tables[-1].columns[1].cells[0].insertionPoints[-1].place(choices112[1][0])[0];
        image2.fit(FitOptions.CONTENT_TO_FRAME);
        image2.fit(FitOptions.PROPORTIONALLY);

        myLeftTextFrame.parentStory.insertionPoints[-1].tables.add({columnCount:2,bodyRowCount:1,appliedTableStyle:app.documents[0].tableStyles.itemByName("TB1")});
        myLeftTextFrame.tables[-1].columns[0].width = 8;
        myLeftTextFrame.tables[-1].columns[1].width = 89.5;
        myLeftTextFrame.tables[-1].cells.everyItem().autoGrow = false;
        myLeftTextFrame.tables[-1].rows.everyItem().height = choices112[2][1];

        myLeftTextFrame.tables[-1].columns[0].cells[0].contents = "C)"
        
        var image3 = myLeftTextFrame.tables[-1].columns[1].cells[0].insertionPoints[-1].place(choices112[2][0])[0];
        image3.fit(FitOptions.CONTENT_TO_FRAME);
        image3.fit(FitOptions.PROPORTIONALLY);

        myLeftTextFrame.parentStory.insertionPoints[-1].tables.add({columnCount:2,bodyRowCount:1,appliedTableStyle:app.documents[0].tableStyles.itemByName("TB1")});
        myLeftTextFrame.tables[-1].columns[0].width = 8;
        myLeftTextFrame.tables[-1].columns[1].width = 89.5;
        myLeftTextFrame.tables[-1].cells.everyItem().autoGrow = false;
        myLeftTextFrame.tables[-1].rows.everyItem().height = choices112[3][1];

        myLeftTextFrame.tables[-1].columns[0].cells[0].contents = "D)"
        
        var image4 = myLeftTextFrame.tables[-1].columns[1].cells[0].insertionPoints[-1].place(choices112[3][0])[0];
        image4.fit(FitOptions.CONTENT_TO_FRAME);
        image4.fit(FitOptions.PROPORTIONALLY);

        myLeftTextFrame.parentStory.insertionPoints[-1].tables.add({columnCount:2,bodyRowCount:1,appliedTableStyle:app.documents[0].tableStyles.itemByName("TB1")});
        myLeftTextFrame.tables[-1].columns[0].width = 8;
        myLeftTextFrame.tables[-1].columns[1].width = 89.5;
        myLeftTextFrame.tables[-1].cells.everyItem().autoGrow = false;
        myLeftTextFrame.tables[-1].rows.everyItem().height = choices112[4][1];

        myLeftTextFrame.tables[-1].columns[0].cells[0].contents = "E)"

        var image5 = myLeftTextFrame.tables[-1].columns[1].cells[0].insertionPoints[-1].place(choices112[4][0])[0];
        image5.fit(FitOptions.CONTENT_TO_FRAME);
        image5.fit(FitOptions.PROPORTIONALLY);

        myLeftTextFrame.parentStory.insertionPoints[-1].contents = "\n";
        
