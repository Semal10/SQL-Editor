import {readString} from 'react-papaparse';

const data = readString(`categoryID,categoryName,description,picture
1,Beverages,Soft drinks coffees teas beers and ales,0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E742E5069637475726500010500000200000007000000504272757368000000000000000000A0290000424D98290000000000005600000028000000AC00000078000000010004000000000000000000880B0000880B0000080000
2,Condiments,Sweet and savory sauces relishes spreads and seasonings,0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E742E5069637475726500010500000200000007000000504272757368000000000000000000A0290000424D98290000000000005600000028000000AC00000078000000010004000000000000000000880B0000880B0000080000
3,Confections,Desserts candies and sweet breads,0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E742E5069637475726500010500000200000007000000504272757368000000000000000000A0290000424D98290000000000005600000028000000AC00000078000000010004000000000000000000880B0000880B0000080000
4,Dairy Products,Cheeses,0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E742E5069637475726500010500000200000007000000504272757368000000000000000000A0290000424D98290000000000005600000028000000AC00000078000000010004000000000000000000880B0000880B0000080000
5,Grains/Cereals,Breads crackers pasta and cereal,0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E742E5069637475726500010500000200000007000000504272757368000000000000000000A0290000424D98290000000000005600000028000000AC00000078000000010004000000000000000000880B0000880B0000080000
6,Meat/Poultry,Prepared meats,0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E742E5069637475726500010500000200000007000000504272757368000000000000000000A0290000424D98290000000000005600000028000000AC00000078000000010004000000000000000000880B0000880B0000080000
7,Produce,Dried fruit and bean curd,0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E742E5069637475726500010500000200000007000000504272757368000000000000000000A0290000424D98290000000000005600000028000000AC00000078000000010004000000000000000000880B0000880B0000080000
8,Seafood,Seaweed and fish,0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E742E5069637475726500010500000200000007000000504272757368000000000000000000A0290000424D98290000000000005600000028000000AC00000078000000010004000000000000000000880B0000880B0000080000`);

export default data