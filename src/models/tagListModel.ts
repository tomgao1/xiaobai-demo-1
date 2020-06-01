
const localStorageKeyName = 'tagList'

type TagsListModel = {
    data: string[];
    fetch: () => string[];
    create: (name: string) => 'success' | 'duplicated'; //联合类型
    save: () => void;
}

const tagListModel: TagsListModel ={
 data: [],
  fetch(){
   this.data = JSON.parse(window.localStorage.getItem('recordList') || '[]');
   return this.data;
},
  create(name){
     if (this.data.indexOf(name) >=0){return 'duplicated';}
      this.data.push(name);
      this.save();
      return 'success';
   
    },

save(){
    window.localStorage.setItem('recordList',JSON.stringify(this.data));
}
};
export default tagListModel;