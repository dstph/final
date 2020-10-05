class Sheet {
  constructor(id,title,artist,sheetCategories,sheetGroups,preview,price,additionalPrint){
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.sheetCategories = sheetCategories;
    this.sheetGroups = sheetGroups;
    this.preview = preview;
    this.price = price;
    this.additionalPrint = additionalPrint;
  }
} 
let sheets,
  sheetsWithClass;

sheets.forEach(note=>sheetsWithClass.push(new Sheet(note)));

fetch("https://raw.githubusercontent.com/brightestsirius/musicnotes/master/sheets.json")
        .then(response => response.json())
        .then(data => {

          sheets = data.sheets;
        });

export default {
  data(){
    return{
      sheetsWithClass;
    }
  }
}

