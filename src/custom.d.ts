type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;//数据类型object |string
    createAt?: Date; //类/购值函数
  };
  type Tag = {
    id: string;
    name: string;
  };
  type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated'; // 联合类型
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
    save: () => void;
  };
  
  