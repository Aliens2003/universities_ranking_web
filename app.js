const national = [
  [1, 2, "↑1", "麻省理工学院", "Massachusetts Institute of Technology (MIT)", "Cambridge", "MA", "Private"],
  [2, 1, "↓1", "普林斯顿大学", "Princeton University", "Princeton", "NJ", "Private"],
  [3, 3, "—", "哈佛大学", "Harvard University", "Cambridge", "MA", "Private"],
  [4, 4, "—", "耶鲁大学", "Yale University", "New Haven", "CT", "Private"],
  [5, 11, "↑6", "加州理工学院", "California Institute of Technology", "Pasadena", "CA", "Private"],
  [5, 4, "↓1", "斯坦福大学", "Stanford University", "Stanford", "CA", "Private"],
  [7, 7, "—", "宾夕法尼亚大学", "University of Pennsylvania", "Philadelphia", "PA", "Private"],
  [8, 7, "↓1", "杜克大学", "Duke University", "Durham", "NC", "Private"],
  [9, 7, "↓2", "约翰斯·霍普金斯大学", "Johns Hopkins University", "Baltimore", "MD", "Private"],
  [9, 7, "↓2", "西北大学", "Northwestern University", "Evanston", "IL", "Private"],
  [9, 6, "↓3", "芝加哥大学", "University of Chicago", "Chicago", "IL", "Private"],
  [12, 15, "↑3", "哥伦比亚大学", "Columbia University", "New York", "NY", "Private"],
  [12, 13, "↑1", "达特茅斯学院", "Dartmouth College", "Hanover", "NH", "Private"],
  [14, 20, "↑6", "卡内基梅隆大学", "Carnegie Mellon University", "Pittsburgh", "PA", "Private"],
  [14, 12, "↓2", "康奈尔大学", "Cornell University", "Ithaca", "NY", "Private"],
  [16, 13, "↓3", "布朗大学", "Brown University", "Providence", "RI", "Private"],
  [16, 17, "↑1", "莱斯大学", "Rice University", "Houston", "TX", "Private"],
  [16, 17, "↑1", "范德堡大学", "Vanderbilt University", "Nashville", "TN", "Private"],
  [16, 20, "↑4", "圣路易斯华盛顿大学", "Washington University in St. Louis", "St. Louis", "MO", "Private"],
  [20, 15, "↓5", "加州大学伯克利分校", "University of California, Berkeley", "Berkeley", "CA", "Public"],
  [20, 17, "↓3", "加州大学洛杉矶分校", "University of California, Los Angeles", "Los Angeles", "CA", "Public"],
  [20, 20, "—", "圣母大学", "University of Notre Dame", "Notre Dame", "IN", "Private"],
  [23, 24, "↑1", "埃默里大学", "Emory University", "Atlanta", "GA", "Private"],
  [23, 24, "↑1", "乔治城大学", "Georgetown University", "Washington", "DC", "Private"],
  [25, 20, "↓5", "密歇根大学安娜堡分校", "University of Michigan--Ann Arbor", "Ann Arbor", "MI", "Public"],
  [26, 26, "—", "弗吉尼亚大学", "University of Virginia", "Charlottesville", "VA", "Public"],
  [27, 26, "↓1", "北卡罗来纳大学教堂山分校", "University of North Carolina at Chapel Hill", "Chapel Hill", "NC", "Public"],
  [27, 28, "↑1", "南加州大学", "University of Southern California", "Los Angeles", "CA", "Private"],
  [29, 32, "↑3", "佐治亚理工学院", "Georgia Institute of Technology", "Atlanta", "GA", "Public"],
  [29, 29, "—", "加州大学圣迭戈分校", "University of California, San Diego", "La Jolla", "CA", "Public"],
  [31, 36, "↑5", "波士顿学院", "Boston College", "Chestnut Hill", "MA", "Private"],
  [31, 32, "↑1", "纽约大学", "New York University", "New York", "NY", "Private"],
  [31, 36, "↑5", "塔夫茨大学", "Tufts University", "Medford", "MA", "Private"],
  [34, 42, "↑8", "波士顿大学", "Boston University", "Boston", "MA", "Private"],
  [34, 33, "↓1", "加州大学戴维斯分校", "University of California, Davis", "Davis", "CA", "Public"],
  [34, 33, "↓1", "加州大学欧文分校", "University of California, Irvine", "Irvine", "CA", "Public"],
  [34, 30, "↓4", "佛罗里达大学", "University of Florida", "Gainesville", "FL", "Public"],
  [34, 33, "↓1", "伊利诺伊大学厄巴纳-香槟分校", "University of Illinois Urbana-Champaign", "Champaign", "IL", "Public"],
  [34, 30, "↓4", "德克萨斯大学奥斯汀分校", "University of Texas at Austin", "Austin", "TX", "Public"],
  [34, 46, "↑12", "维克森林大学", "Wake Forest University", "Winston-Salem", "NC", "Private"],
  [42, 46, "↑4", "东北大学", "Northeastern University", "Boston", "MA", "Private"],
  [42, 57, "↑15", "维拉诺瓦大学", "Villanova University", "Villanova", "PA", "Private"],
  [44, 46, "↑2", "理海大学", "Lehigh University", "Bethlehem", "PA", "Private"],
  [44, 41, "↓3", "俄亥俄州立大学", "Ohio State University", "Columbus", "OH", "Public"],
  [44, 42, "↓2", "罗格斯大学新不伦瑞克分校", "Rutgers University--New Brunswick", "New Brunswick", "NJ", "Public"],
  [44, 39, "↓5", "加州大学圣塔芭芭拉分校", "University of California, Santa Barbara", "Santa Barbara", "CA", "Public"],
  [49, 42, "↓7", "马里兰大学帕克分校", "University of Maryland, College Park", "College Park", "MD", "Public"],
  [49, 46, "↓3", "罗切斯特大学", "University of Rochester", "Rochester", "NY", "Private"],
  [49, 46, "↓3", "华盛顿大学", "University of Washington", "Seattle", "WA", "Public"],
].map(([rank, , , zh, en, city, state, type]) => ({ rank, zh, en, city, state, type }));

const programs = [
  ["Business", "Accounting", 1, "哥伦比亚大学", "Columbia University"],
  ["Business", "Accounting", 1, "纽约大学", "New York University"],
  ["Business", "Accounting", 1, "斯坦福大学", "Stanford University"],
  ["Business", "Accounting", 1, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "Accounting", 6, "哈佛大学", "Harvard University"],
  ["Business", "Accounting", 6, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "Accounting", 6, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Accounting", 6, "芝加哥大学", "University of Chicago"],
  ["Business", "Business Analytics", 1, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "Business Analytics", 2, "哥伦比亚大学", "Columbia University"],
  ["Business", "Business Analytics", 2, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Business", "Business Analytics", 2, "斯坦福大学", "Stanford University"],
  ["Business", "Business Analytics", 5, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Business Analytics", 5, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "Business Analytics", 7, "芝加哥大学", "University of Chicago"],
  ["Business", "Business Analytics", 9, "西北大学", "Northwestern University"],
  ["Business", "Entrepreneurship", 1, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "Entrepreneurship", 1, "斯坦福大学", "Stanford University"],
  ["Business", "Entrepreneurship", 3, "哈佛大学", "Harvard University"],
  ["Business", "Entrepreneurship", 4, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Entrepreneurship", 7, "芝加哥大学", "University of Chicago"],
  ["Business", "Entrepreneurship", 10, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Business", "Entrepreneurship", 10, "西北大学", "Northwestern University"],
  ["Business", "Entrepreneurship", 10, "纽约大学", "New York University"],
  ["Business", "Finance", 1, "斯坦福大学", "Stanford University"],
  ["Business", "Finance", 1, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "Finance", 3, "哈佛大学", "Harvard University"],
  ["Business", "Finance", 3, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "Finance", 3, "芝加哥大学", "University of Chicago"],
  ["Business", "Finance", 6, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Finance", 6, "纽约大学", "New York University"],
  ["Business", "Finance", 8, "哥伦比亚大学", "Columbia University"],
  ["Business", "Information Systems", 1, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Business", "Information Systems", 3, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "Information Systems", 5, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "Information Systems", 6, "纽约大学", "New York University"],
  ["Business", "Information Systems", 8, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Business", "International Business", 1, "哈佛大学", "Harvard University"],
  ["Business", "International Business", 2, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "International Business", 3, "纽约大学", "New York University"],
  ["Business", "International Business", 5, "哥伦比亚大学", "Columbia University"],
  ["Business", "International Business", 5, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "International Business", 5, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Management", 1, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "Management", 2, "哈佛大学", "Harvard University"],
  ["Business", "Management", 3, "哥伦比亚大学", "Columbia University"],
  ["Business", "Management", 3, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "Management", 3, "西北大学", "Northwestern University"],
  ["Business", "Management", 3, "斯坦福大学", "Stanford University"],
  ["Business", "Management", 7, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Management", 8, "达特茅斯学院", "Dartmouth College"],
  ["Business", "Management", 8, "芝加哥大学", "University of Chicago"],
  ["Business", "Marketing", 1, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "Marketing", 2, "西北大学", "Northwestern University"],
  ["Business", "Marketing", 3, "哥伦比亚大学", "Columbia University"],
  ["Business", "Marketing", 3, "斯坦福大学", "Stanford University"],
  ["Business", "Marketing", 5, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Marketing", 5, "芝加哥大学", "University of Chicago"],
  ["Business", "Marketing", 8, "哈佛大学", "Harvard University"],
  ["Business", "Marketing", 8, "纽约大学", "New York University"],
  ["Business", "Production / Operations", 1, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "Production / Operations", 2, "哥伦比亚大学", "Columbia University"],
  ["Business", "Production / Operations", 2, "斯坦福大学", "Stanford University"],
  ["Business", "Production / Operations", 2, "芝加哥大学", "University of Chicago"],
  ["Business", "Production / Operations", 2, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "Production / Operations", 6, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Production / Operations", 8, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Business", "Production / Operations", 8, "哈佛大学", "Harvard University"],
  ["Business", "Production / Operations", 8, "西北大学", "Northwestern University"],
  ["Business", "Real Estate", 1, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "Real Estate", 2, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Real Estate", 3, "哥伦比亚大学", "Columbia University"],
  ["Business", "Real Estate", 3, "纽约大学", "New York University"],
  ["Business", "Real Estate", 6, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "Supply Chain / Logistics", 1, "麻省理工学院", "Massachusetts Institute of Technology (MIT)"],
  ["Business", "Supply Chain / Logistics", 2, "斯坦福大学", "Stanford University"],
  ["Business", "Supply Chain / Logistics", 2, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Business", "Supply Chain / Logistics", 2, "宾夕法尼亚大学", "University of Pennsylvania"],
  ["Business", "Supply Chain / Logistics", 5, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Business", "Supply Chain / Logistics", 5, "芝加哥大学", "University of Chicago"],
  ["Business", "Supply Chain / Logistics", 8, "哥伦比亚大学", "Columbia University"],
  ["Business", "Supply Chain / Logistics", 8, "西北大学", "Northwestern University"],
  ["Computer Science", "Artificial Intelligence", 1, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Computer Science", "Artificial Intelligence", 4, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Computer Science", "Artificial Intelligence", 5, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Computer Science", "Programming Language", 1, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Computer Science", "Programming Language", 9, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Computer Science", "Programming Language", 15, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Computer Science", "Systems", 1, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Computer Science", "Systems", 3, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Computer Science", "Systems", 6, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Computer Science", "Theory", 2, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Computer Science", "Theory", 2, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Computer Science", "Theory", 13, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Engineering", "Aerospace Engineering", 2, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Engineering", "Biomedical Engineering", 1, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Engineering", "Biomedical Engineering / Bioengineering", 8, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Engineering", "Chemical Engineering", 2, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Engineering", "Chemical Engineering", 5, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Engineering", "Civil Engineering", 1, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Engineering", "Civil Engineering", 3, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Engineering", "Civil Engineering", 10, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Engineering", "Computer Engineering", 1, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Engineering", "Computer Engineering", 4, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Engineering", "Computer Engineering", 5, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Engineering", "Electrical / Electronic / Communications Engineering", 1, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Engineering", "Electrical / Electronic / Communications Engineering", 8, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Engineering", "Environmental Engineering", 4, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Engineering", "Environmental / Environmental Health Engineering", 1, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Engineering", "Environmental / Environmental Health Engineering", 9, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Engineering", "Industrial / Manufacturing / Systems Engineering", 1, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Engineering", "Industrial / Manufacturing / Systems Engineering", 2, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Engineering", "Materials Engineering", 3, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Engineering", "Mechanical Engineering", 3, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Engineering", "Mechanical Engineering", 3, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Engineering", "Mechanical Engineering", 9, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Engineering", "Nuclear Engineering", 8, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Education", "Education Policy", 10, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Public Affairs", "Environmental Policy and Management", 5, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Public Affairs", "Environmental Policy and Management", 10, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Public Affairs", "Environmental Policy and Management", 10, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Public Affairs", "Information and Technology Management", 1, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Public Affairs", "Information and Technology Management", 2, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Public Affairs", "Public Policy Analysis", 1, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Public Affairs", "Public Policy Analysis", 7, "卡内基梅隆大学", "Carnegie Mellon University"],
  ["Public Affairs", "Social Policy", 3, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Public Health", "Environmental Health", 9, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Public Health", "Epidemiology", 9, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Public Health", "Health Policy and Management", 9, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Public Health", "Social and Behavioral Sciences", 8, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Science", "Biological Sciences", 3, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Science", "Biostatistics", 7, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Science", "Chemistry", 1, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Science", "Chemistry", 20, "佐治亚理工学院", "Georgia Institute of Technology"],
  ["Science", "Earth Sciences", 2, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Science", "Mathematics", 2, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Science", "Physics", 5, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Science", "Statistics", 2, "加州大学伯克利分校", "University of California, Berkeley"],
  ["Science", "Statistics", 6, "卡内基梅隆大学", "Carnegie Mellon University"],
].map(([field, specialty, rank, zh, en]) => ({ field, specialty, rank, zh, en }))
  .filter((item) => item.rank <= 20);

const graduateSchools = [
  ["Engineering Schools", "工程学院", 1, "麻省理工学院", "Massachusetts Institute of Technology (MIT)", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 2, "斯坦福大学", "Stanford University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 3, "加州大学伯克利分校", "University of California, Berkeley", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 4, "佐治亚理工学院", "Georgia Institute of Technology", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 4, "普渡大学西拉法叶分校", "Purdue University--West Lafayette", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 6, "加州理工学院", "California Institute of Technology", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 6, "伊利诺伊大学厄巴纳-香槟分校", "University of Illinois Urbana-Champaign", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 6, "德克萨斯大学奥斯汀分校", "University of Texas at Austin", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 9, "加州大学圣迭戈分校", "University of California, San Diego", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 10, "卡内基梅隆大学", "Carnegie Mellon University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 11, "康奈尔大学", "Cornell University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 12, "密歇根大学安娜堡分校", "University of Michigan--Ann Arbor", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 13, "约翰斯·霍普金斯大学", "Johns Hopkins University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 14, "德克萨斯农工大学", "Texas A&M University--College Station", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 14, "加州大学洛杉矶分校", "University of California, Los Angeles", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 16, "西北大学", "Northwestern University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 16, "宾夕法尼亚大学", "University of Pennsylvania", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 18, "哥伦比亚大学", "Columbia University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 18, "科罗拉多大学博尔德分校", "University of Colorado Boulder", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 18, "马里兰大学帕克分校", "University of Maryland, College Park", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 21, "南加州大学", "University of Southern California", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 22, "杜克大学", "Duke University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 22, "哈佛大学", "Harvard University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 22, "华盛顿大学", "University of Washington", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 25, "普林斯顿大学", "Princeton University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 25, "莱斯大学", "Rice University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 27, "威斯康星大学麦迪逊分校", "University of Wisconsin--Madison", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 28, "北卡罗来纳州立大学", "North Carolina State University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 28, "俄亥俄州立大学", "Ohio State University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 28, "宾夕法尼亚州立大学帕克分校", "Pennsylvania State University--University Park", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 28, "加州大学圣塔芭芭拉分校", "University of California, Santa Barbara", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 32, "波士顿大学", "Boston University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 32, "弗吉尼亚理工学院", "Virginia Tech", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 34, "东北大学", "Northeastern University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 35, "加州大学戴维斯分校", "University of California, Davis", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 36, "加州大学欧文分校", "University of California, Irvine", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 36, "特拉华大学", "University of Delaware", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 36, "明尼苏达大学双城分校", "University of Minnesota--Twin Cities", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 39, "范德堡大学", "Vanderbilt University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 39, "耶鲁大学", "Yale University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 41, "亚利桑那州立大学", "Arizona State University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 42, "纽约大学", "New York University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 42, "匹兹堡大学", "University of Pittsburgh", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 42, "弗吉尼亚大学", "University of Virginia", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 42, "圣路易斯华盛顿大学", "Washington University in St. Louis", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 46, "爱荷华州立大学", "Iowa State University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 46, "佛罗里达大学", "University of Florida", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 48, "圣母大学", "University of Notre Dame", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 48, "罗切斯特大学", "University of Rochester", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 50, "布朗大学", "Brown University", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 50, "科罗拉多矿业学院", "Colorado School of Mines", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 50, "伦斯勒理工学院", "Rensselaer Polytechnic Institute", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
  ["Engineering Schools", "工程学院", 50, "戴顿大学", "University of Dayton", "2026-2027 Best Engineering Schools", "Jingsailian repost / US News"],
].map(([category, categoryZh, rank, zh, en, school, source]) => ({ category, categoryZh, rank, zh, en, school, source }))
  .filter((item) => item.category === "Engineering Schools");

const worldRankings = (window.qsWorld2027 || []).map(
  ([rank, zh, en, country, countryZh, region, regionZh, score]) => ({
    rank,
    zh,
    en,
    country,
    countryZh,
    region,
    regionZh,
    score,
  })
);

const subjectRankings = (window.qsSubject2026 || []).map(
  ([subject, rank, zh, en, country, countryZh, region, regionZh, score]) => ({
    subject,
    rank,
    zh,
    en,
    country,
    countryZh,
    region,
    regionZh,
    score,
  })
);

const translations = {
  zh: {
    appTitle: "美国大学排名查询",
    appSubtitle: "2027 U.S. News 综排、QS 2027 世界排名与工程学院排名，可按学校和地区快速筛选。",
    worldAppTitle: "世界大学排名查询",
    worldAppSubtitle: "查询 QS 2027 世界大学排名前 100 名，可按学校、国家或地区快速筛选。",
    subjectAppSubtitle: "查询 QS 2026 世界大学学科排名前 100 名，可按学科、学校和国家或地区筛选。",
    usTab: "U.S. News 排名",
    nationalTab: "综排 Top 50",
    graduateTab: "研究生工程学院排名",
    worldTab: "QS 排名",
    qsWorldRank: "QS 世界名次",
    countryOverallScope: "QS 世界 Top 100 · {country}",
    countrySubjectScope: "QS 学科 Top 100 · {country}",
    countryEmpty: "{country}在当前榜单中无结果。",
    clearFilters: "清除筛选",
    worldOverallTab: "综合排名 Top 100",
    worldSubjectTab: "学科排名 Top 100",
    searchLabel: "搜索",
    searchPlaceholder: "输入学校、中文名、城市或专业",
    worldSearchPlaceholder: "输入学校中文名或英文名",
    fieldLabel: "领域",
    allFields: "全部领域",
    allSubjects: "全部学科",
    stateLabel: "州/地区",
    allStates: "全部地区",
    countryLabel: "国家/地区",
    allCountries: "全部国家/地区",
    typeLabel: "学校类型",
    allTypes: "全部类型",
    privateType: "私立",
    publicType: "公立",
    resultsLabel: "条结果",
    sourceLabel: "US News 榜单",
    worldSourceLabel: "QS 世界大学排名",
    subjectSourceLabel: "QS 世界大学学科排名",
    scopeText: "当前范围",
    completeRanking: "Top 100（含并列）",
    subjectScope: "4 个学科 Top 100",
    emptyState: "没有匹配结果，请调整筛选条件。",
    footnote: "数据整理自公开可核实的 US News 2026 榜单发布信息、学校官方新闻和榜单转载来源；申请时建议再次核对目标项目官网。",
    worldFootnote: "QS 2027 世界大学排名前 100 名数据来自 QS 官方中文网站；包含所有并列第 100 名的学校。",
    subjectFootnote: "QS 2026 世界大学学科排名数据来自 QS 官方中文网站；各学科保留前 100 名及并列第 100 名学校。",
    rank: "排名",
    rank2027: "USNews 2027",
    qsRank: "QS 2027",
    engineeringRank: "USNews工程学院排名",
    school: "学校",
    location: "城市/州",
    countryRegion: "国家/地区",
    overallScore: "总分",
    subjectName: "学科",
    type: "类型",
    field: "领域",
    specialty: "专业方向",
    english: "英文名",
    private: "私立",
    public: "公立",
    source: "来源",
    schoolCollege: "榜单口径",
    previousPage: "上一页",
    nextPage: "下一页",
    pageOf: "第 {current} / {total} 页",
  },
  en: {
    appTitle: "US News Rankings Explorer",
    appSubtitle: "Search 2027 U.S. News national rankings, QS 2027 world rankings, and engineering school rankings.",
    worldAppTitle: "World University Rankings Explorer",
    worldAppSubtitle: "Search the QS World University Rankings 2027 Top 100 by university or country/territory.",
    subjectAppSubtitle: "Search the QS World University Rankings by Subject 2026 Top 100 by subject, university, or country/territory.",
    usTab: "U.S. News Rankings",
    nationalTab: "National Top 50",
    graduateTab: "Graduate Engineering Schools",
    worldTab: "QS Rankings",
    qsWorldRank: "QS world rank",
    countryOverallScope: "QS World Top 100 · {country}",
    countrySubjectScope: "QS Subject Top 100 · {country}",
    countryEmpty: "No universities from {country} appear in this ranking.",
    clearFilters: "Clear filters",
    worldOverallTab: "Overall Top 100",
    worldSubjectTab: "Subject Top 100",
    searchLabel: "Search",
    searchPlaceholder: "Search school, city, state, or specialty",
    worldSearchPlaceholder: "Search university name",
    fieldLabel: "Field",
    allFields: "All fields",
    allSubjects: "All subjects",
    stateLabel: "State",
    allStates: "All states",
    countryLabel: "Country / Territory",
    allCountries: "All countries / territories",
    typeLabel: "School type",
    allTypes: "All types",
    privateType: "Private",
    publicType: "Public",
    resultsLabel: "results",
    sourceLabel: "US News rankings",
    worldSourceLabel: "QS World University Rankings",
    subjectSourceLabel: "QS World University Rankings by Subject",
    scopeText: "current scope",
    completeRanking: "Top 100 (including ties)",
    subjectScope: "4 subjects, Top 100",
    emptyState: "No matching results. Adjust your filters.",
    footnote: "Data is compiled from publicly verifiable US News 2026 releases, university news posts, and ranking summaries. Re-check target program websites before applying.",
    worldFootnote: "QS World University Rankings 2027 Top 100 data is sourced from the official QS China website and includes every institution tied at rank 100.",
    subjectFootnote: "QS World University Rankings by Subject 2026 data is sourced from the official QS China website. Each subject includes the Top 100 and all institutions tied at rank 100.",
    rank: "Rank",
    rank2027: "U.S. News 2027",
    qsRank: "QS 2027",
    engineeringRank: "U.S. News Engineering Rank",
    school: "School",
    location: "City / State",
    countryRegion: "Country / Territory",
    overallScore: "Overall score",
    subjectName: "Subject",
    type: "Type",
    field: "Field",
    specialty: "Specialty",
    english: "English name",
    private: "Private",
    public: "Public",
    source: "Source",
    schoolCollege: "Ranking scope",
    previousPage: "Previous page",
    nextPage: "Next page",
    pageOf: "Page {current} of {total}",
  },
};

const fieldZh = {
  "Business": "商科",
  "Computer Science": "计算机科学",
  "Engineering": "工程",
  "Education": "教育",
  "Public Affairs": "公共事务",
  "Public Health": "公共卫生",
  "Science": "理科",
};

const qsSubjectNames = {
  engineeringTechnology: {
    zh: "工程技术",
    en: "Engineering & Technology",
  },
  mechanicalEngineering: {
    zh: "机械工程（机械、航空与制造）",
    en: "Mechanical, Aeronautical & Manufacturing Engineering",
  },
  electricalEngineering: {
    zh: "电子电气工程",
    en: "Electrical & Electronic Engineering",
  },
  computerScience: {
    zh: "计算机科学和信息系统",
    en: "Computer Science & Information Systems",
  },
};

const specialtyZh = {
  "Accounting": "会计",
  "Aerospace Engineering": "航空航天工程",
  "Artificial Intelligence": "人工智能",
  "Biological Sciences": "生物科学",
  "Biomedical Engineering": "生物医学工程",
  "Biomedical Engineering / Bioengineering": "生物医学工程 / 生物工程",
  "Biostatistics": "生物统计",
  "Business Analytics": "商业分析",
  "Chemical Engineering": "化学工程",
  "Chemistry": "化学",
  "Civil Engineering": "土木工程",
  "Computer Engineering": "计算机工程",
  "Earth Sciences": "地球科学",
  "Education Policy": "教育政策",
  "Electrical / Electronic / Communications Engineering": "电气 / 电子 / 通信工程",
  "Entrepreneurship": "创业学",
  "Environmental Engineering": "环境工程",
  "Environmental / Environmental Health Engineering": "环境 / 环境健康工程",
  "Environmental Health": "环境健康",
  "Environmental Policy and Management": "环境政策与管理",
  "Epidemiology": "流行病学",
  "Finance": "金融",
  "Health Policy and Management": "卫生政策与管理",
  "Industrial / Manufacturing / Systems Engineering": "工业 / 制造 / 系统工程",
  "Information Systems": "信息系统",
  "Information and Technology Management": "信息与技术管理",
  "International Business": "国际商务",
  "Management": "管理学",
  "Marketing": "市场营销",
  "Materials Engineering": "材料工程",
  "Mathematics": "数学",
  "Mechanical Engineering": "机械工程",
  "Nuclear Engineering": "核工程",
  "Physics": "物理",
  "Production / Operations": "生产 / 运营管理",
  "Programming Language": "编程语言",
  "Public Policy Analysis": "公共政策分析",
  "Real Estate": "房地产",
  "Social Policy": "社会政策",
  "Social and Behavioral Sciences": "社会与行为科学",
  "Statistics": "统计学",
  "Supply Chain / Logistics": "供应链 / 物流",
  "Systems": "系统",
  "Theory": "理论计算机科学",
};

const stateZh = {
  "CA": "加利福尼亚州",
  "CT": "康涅狄格州",
  "DC": "华盛顿特区",
  "FL": "佛罗里达州",
  "GA": "佐治亚州",
  "IL": "伊利诺伊州",
  "IN": "印第安纳州",
  "MA": "马萨诸塞州",
  "MD": "马里兰州",
  "MI": "密歇根州",
  "MO": "密苏里州",
  "NC": "北卡罗来纳州",
  "NJ": "新泽西州",
  "NY": "纽约州",
  "OH": "俄亥俄州",
  "PA": "宾夕法尼亚州",
  "RI": "罗得岛州",
  "TN": "田纳西州",
  "TX": "德克萨斯州",
  "VA": "弗吉尼亚州",
  "WA": "华盛顿州",
  "WI": "威斯康星州",
};

const cityZh = {
  "Ann Arbor": "安娜堡",
  "Athens": "雅典",
  "Atlanta": "亚特兰大",
  "Austin": "奥斯汀",
  "Baltimore": "巴尔的摩",
  "Berkeley": "伯克利",
  "Bethlehem": "伯利恒",
  "Boston": "波士顿",
  "Cambridge": "剑桥",
  "Champaign": "香槟",
  "Chapel Hill": "教堂山",
  "Charlottesville": "夏洛茨维尔",
  "Chestnut Hill": "栗树山",
  "Chicago": "芝加哥",
  "Columbus": "哥伦布",
  "Davis": "戴维斯",
  "Durham": "达勒姆",
  "Evanston": "埃文斯顿",
  "Gainesville": "盖恩斯维尔",
  "Hanover": "汉诺威",
  "Houston": "休斯敦",
  "Irvine": "欧文",
  "Ithaca": "伊萨卡",
  "La Jolla": "拉霍亚",
  "Los Angeles": "洛杉矶",
  "Madison": "麦迪逊",
  "Medford": "梅德福",
  "Nashville": "纳什维尔",
  "New Brunswick": "新不伦瑞克",
  "New Haven": "纽黑文",
  "New York": "纽约",
  "Notre Dame": "圣母镇",
  "Pasadena": "帕萨迪纳",
  "Philadelphia": "费城",
  "Pittsburgh": "匹兹堡",
  "Princeton": "普林斯顿",
  "Providence": "普罗维登斯",
  "Rochester": "罗切斯特",
  "Santa Barbara": "圣塔芭芭拉",
  "Seattle": "西雅图",
  "St. Louis": "圣路易斯",
  "Stanford": "斯坦福",
  "Villanova": "维拉诺瓦",
  "Washington": "华盛顿",
  "West Lafayette": "西拉法叶",
  "Winston-Salem": "温斯顿-塞勒姆",
};

let lang = "zh";
let view = "world";
let qsCountry = "";
const viewFilters = new Map();
let lastUsView = "national";
let lastWorldView = "world";
let currentPage = 1;
const pageSize = 50;

const els = {
  filters: document.querySelector(".filters"),
  usSubviews: document.querySelector("[data-us-subviews]"),
  worldSubviews: document.querySelector("[data-world-subviews]"),
  search: document.querySelector("#searchInput"),
  field: document.querySelector("#fieldFilter"),
  state: document.querySelector("#stateFilter"),
  type: document.querySelector("#typeFilter"),
  head: document.querySelector("#tableHead"),
  body: document.querySelector("#tableBody"),
  count: document.querySelector("#resultCount"),
  sourceYear: document.querySelector("#sourceYear"),
  sourceLabel: document.querySelector('[data-i18n="sourceLabel"]'),
  scope: document.querySelector("#scopeLabel"),
  empty: document.querySelector("#emptyState"),
  emptyMessage: document.querySelector("#emptyMessage"),
  clearFilters: document.querySelector("#clearFilters"),
  pagination: document.querySelector("#pagination"),
  previousPage: document.querySelector("#previousPage"),
  nextPage: document.querySelector("#nextPage"),
  pageInfo: document.querySelector("#pageInfo"),
  footnote: document.querySelector("footer [data-i18n=\"footnote\"]"),
  appTitle: document.querySelector('[data-i18n="appTitle"]'),
  appSubtitle: document.querySelector('[data-i18n="appSubtitle"]'),
  fieldLabel: document.querySelector('[data-i18n="fieldLabel"]'),
  stateLabel: document.querySelector('[data-i18n="stateLabel"]'),
};

function t(key) {
  return translations[lang][key] || key;
}

function isWorldView(candidate = view) {
  return candidate === "world" || candidate === "worldSubject";
}

function normalize(text) {
  return String(text ?? "").toLowerCase().trim();
}

function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function localSchool(item) {
  return lang === "zh" ? item.zh : item.en;
}

function subSchool(item) {
  return lang === "zh" ? item.en : item.zh;
}

function localField(field) {
  return lang === "zh" ? fieldZh[field] || field : field;
}

function localSpecialty(specialty) {
  return lang === "zh" ? specialtyZh[specialty] || specialty : specialty;
}

function localSubject(subject) {
  return qsSubjectNames[subject]?.[lang] || subject;
}

function localState(state) {
  return lang === "zh" ? stateZh[state] || state : state;
}

function localCity(city) {
  return lang === "zh" ? cityZh[city] || city : city;
}

function localCountry(item) {
  return lang === "zh" ? item.countryZh || item.country : item.country;
}

function localRegion(item) {
  return lang === "zh" ? item.regionZh || item.region : item.region;
}

function schoolKey(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/\s*\(mit\)/g, "")
    .replace(/^the\s+/, "")
    .replace(/--/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function engineeringRankFor(school) {
  const match = graduateSchools.find((item) => schoolKey(item.en) === schoolKey(school.en));
  return match ? `#${match.rank}` : "";
}

const qs2027Ranks = new Map([
  ["Massachusetts Institute of Technology (MIT)", "1"],
  ["Stanford University", "=2"],
  ["Harvard University", "5"],
  ["California Institute of Technology", "7"],
  ["University of Pennsylvania", "15"],
  ["Cornell University", "16"],
  ["Yale University", "=16"],
  ["Johns Hopkins University", "=20"],
  ["University of California, Berkeley", "=20"],
  ["University of Chicago", "24"],
  ["Princeton University", "27"],
  ["Columbia University", "=43"],
  ["Northwestern University", "=45"],
  ["University of California, Los Angeles", "49"],
  ["University of Michigan--Ann Arbor", "51"],
  ["Carnegie Mellon University", "55"],
  ["New York University", "58"],
  ["Brown University", "66"],
  ["Duke University", "70"],
  ["University of Texas at Austin", "72"],
  ["University of Illinois Urbana-Champaign", "74"],
  ["University of California, San Diego", "81"],
  ["University of Washington", "=92"],
  ["Boston University", "94"],
  ["Rice University", "122"],
  ["University of California, Davis", "137"],
  ["Georgia Institute of Technology", "=142"],
  ["University of Southern California", "153"],
  ["University of North Carolina at Chapel Hill", "=158"],
  ["Washington University in St. Louis", "=162"],
  ["University of California, Santa Barbara", "173"],
  ["Emory University", "183"],
]);

function qsRankFor(school) {
  const match = [...qs2027Ranks.entries()].find(([name]) => schoolKey(name) === schoolKey(school.en));
  return match ? `#${match[1]}` : "";
}

function translateStaticText() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    const isActive = button.dataset.view === view;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll("[data-section]").forEach((button) => {
    const isActive = button.dataset.section === "world" ? isWorldView() : !isWorldView();
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function readFilters() {
  return { search: els.search.value, field: els.field.value, state: els.state.value, type: els.type.value };
}

function rebuildFilters(filters = {}) {
  const activeFields = view === "worldSubject"
    ? Object.keys(qsSubjectNames)
    : [...new Set(graduateSchools.map((item) => item.category))].sort();
  const worldRows = view === "worldSubject" ? subjectRankings : worldRankings;
  const countries = new Map(worldRows.map((item) => [item.country, item]));
  if (isWorldView() && qsCountry && !countries.has(qsCountry)) {
    const selected = [...worldRankings, ...subjectRankings].find((item) => item.country === qsCountry);
    if (selected) countries.set(qsCountry, selected);
  }
  const activeStates = isWorldView()
    ? [...countries.keys()].filter(Boolean).sort()
    : [...new Set(national.map((item) => item.state))].sort();

  els.field.innerHTML = `<option value="">${t(view === "worldSubject" ? "allSubjects" : "allFields")}</option>` +
    activeFields.map((field) => {
      const label = view === "worldSubject"
        ? localSubject(field)
        : view === "graduate"
        ? (lang === "zh" ? graduateSchools.find((item) => item.category === field)?.categoryZh || field : field)
        : localField(field);
      return `<option value="${field}">${label}</option>`;
    }).join("");
  els.state.innerHTML = `<option value="">${t(isWorldView() ? "allCountries" : "allStates")}</option>` +
    activeStates.map((state) => {
      const worldItem = isWorldView() ? countries.get(state) : null;
      const label = worldItem ? localCountry(worldItem) : localState(state);
      return `<option value="${escapeHtml(state)}">${escapeHtml(label)}</option>`;
    }).join("");
  els.type.innerHTML = `
    <option value="">${t("allTypes")}</option>
    <option value="Private">${t("privateType")}</option>
    <option value="Public">${t("publicType")}</option>
  `;
  els.search.value = filters.search ?? "";
  els.field.value = filters.field ?? "";
  els.state.value = isWorldView() ? qsCountry : filters.state ?? "";
  els.type.value = filters.type ?? "";
  els.field.parentElement.hidden = view !== "worldSubject";
  els.state.parentElement.hidden = false;
  els.type.parentElement.hidden = false;
  els.stateLabel.textContent = t(isWorldView() ? "countryLabel" : "stateLabel");
  if (view === "graduate") {
    els.state.parentElement.hidden = true;
    els.type.parentElement.hidden = true;
  }
  if (isWorldView()) {
    els.type.parentElement.hidden = true;
  }
}

function matchesSearch(item, query) {
  if (!query) return true;
  return [item.zh, item.en, item.city, item.state, item.type, item.field, item.specialty, item.category, item.categoryZh, item.school, item.source, item.country, item.countryZh, item.region, item.regionZh, item.subject]
    .concat([localCity(item.city), localState(item.state), localField(item.field), localSpecialty(item.specialty), localSubject(item.subject)])
    .some((value) => normalize(value).includes(query));
}

function filteredRows() {
  const query = normalize(els.search.value);
  if (view === "national") {
    return national.filter((item) =>
      matchesSearch(item, query) &&
      (!els.state.value || item.state === els.state.value) &&
      (!els.type.value || item.type === els.type.value)
    );
  }

  if (view === "graduate") {
    return graduateSchools.filter((item) =>
      matchesSearch(item, query) &&
      (!els.field.value || item.category === els.field.value)
    ).sort((a, b) => a.category.localeCompare(b.category) || a.rank - b.rank || a.en.localeCompare(b.en));
  }

  if (view === "world") {
    return worldRankings.filter((item) =>
      matchesSearch(item, query) &&
      (!els.state.value || item.country === els.state.value)
    );
  }

  if (view === "worldSubject") {
    return subjectRankings.filter((item) =>
      matchesSearch(item, query) &&
      (!els.field.value || item.subject === els.field.value) &&
      (!els.state.value || item.country === els.state.value)
    );
  }

  return [];
}

function renderNational(rows) {
  els.head.innerHTML = `<tr>
    <th>${t("rank2027")}</th>
    <th>${t("qsRank")}</th>
    <th>${t("school")}</th>
    <th>${t("engineeringRank")}</th>
    <th>${t("location")}</th>
    <th>${t("type")}</th>
  </tr>`;
  els.body.innerHTML = rows.map((item) => `<tr>
    <td class="rank">#${item.rank}</td>
    <td class="rank">${qsRankFor(item)}</td>
    <td>
      <div class="school-main">${localSchool(item)}</div>
      <div class="school-sub">${subSchool(item)}</div>
    </td>
    <td class="rank">${engineeringRankFor(item)}</td>
    <td>${localCity(item.city)}, ${localState(item.state)}</td>
    <td><span class="pill">${item.type === "Private" ? t("private") : t("public")}</span></td>
  </tr>`).join("");
}

function renderGraduate(rows) {
  els.head.innerHTML = `<tr>
    <th>${t("field")}</th>
    <th>${t("rank")}</th>
    <th>${t("school")}</th>
    <th>${t("schoolCollege")}</th>
  </tr>`;
  els.body.innerHTML = rows.map((item) => `<tr>
    <td><span class="pill">${lang === "zh" ? item.categoryZh : item.category}</span></td>
    <td class="rank">#${item.rank}</td>
    <td>
      <div class="school-main">${localSchool(item)}</div>
      <div class="school-sub">${subSchool(item)}</div>
    </td>
    <td>${item.school}</td>
  </tr>`).join("");
}

function renderWorld(rows) {
  els.head.innerHTML = `<tr>
    <th>${t("qsWorldRank")}</th>
    <th>${t("school")}</th>
    <th>${t("countryRegion")}</th>
    <th>${t("overallScore")}</th>
  </tr>`;
  els.body.innerHTML = rows.map((item) => `<tr>
    <td class="rank">${escapeHtml(item.rank)}</td>
    <td>
      <div class="school-main">${escapeHtml(localSchool(item))}</div>
      <div class="school-sub">${escapeHtml(subSchool(item))}</div>
    </td>
    <td>
      <div>${escapeHtml(localCountry(item))}</div>
      <div class="school-sub">${escapeHtml(localRegion(item))}</div>
    </td>
    <td>${item.score ? escapeHtml(item.score) : "—"}</td>
  </tr>`).join("");
}

function renderSubjects(rows) {
  els.head.innerHTML = `<tr>
    <th>${t("subjectName")}</th>
    <th>${t("qsWorldRank")}</th>
    <th>${t("school")}</th>
    <th>${t("countryRegion")}</th>
    <th>${t("overallScore")}</th>
  </tr>`;
  els.body.innerHTML = rows.map((item) => `<tr>
    <td><span class="pill">${escapeHtml(localSubject(item.subject))}</span></td>
    <td class="rank">${escapeHtml(item.rank)}</td>
    <td>
      <div class="school-main">${escapeHtml(localSchool(item))}</div>
      <div class="school-sub">${escapeHtml(subSchool(item))}</div>
    </td>
    <td>
      <div>${escapeHtml(localCountry(item))}</div>
      <div class="school-sub">${escapeHtml(localRegion(item))}</div>
    </td>
    <td>${item.score ? escapeHtml(item.score) : "—"}</td>
  </tr>`).join("");
}

function render() {
  translateStaticText();
  const rows = filteredRows();
  els.count.textContent = rows.length;
  const isWorld = isWorldView();
  const isSubject = view === "worldSubject";
  document.title = t(isWorld ? "worldAppTitle" : "appTitle");
  els.appTitle.textContent = t(isWorld ? "worldAppTitle" : "appTitle");
  els.appSubtitle.textContent = t(isSubject ? "subjectAppSubtitle" : isWorld ? "worldAppSubtitle" : "appSubtitle");
  els.usSubviews.hidden = isWorld;
  els.worldSubviews.hidden = !isWorld;
  els.search.placeholder = t(isWorld ? "worldSearchPlaceholder" : "searchPlaceholder");
  els.fieldLabel.textContent = t(isSubject ? "subjectName" : "fieldLabel");
  els.stateLabel.textContent = t(isWorld ? "countryLabel" : "stateLabel");
  els.filters.classList.toggle("compact-filters", view === "world");
  els.filters.classList.toggle("search-only", view === "graduate");
  els.filters.classList.toggle("subject-filters", isSubject);
  els.sourceYear.textContent = isSubject ? "2026" : view === "graduate" ? "2026–2027" : "2027";
  els.sourceLabel.textContent = t(isSubject ? "subjectSourceLabel" : isWorld ? "worldSourceLabel" : "sourceLabel");
  const countryLabel = isWorld && qsCountry ? els.state.selectedOptions[0]?.textContent : "";
  const scope = isSubject ? "subjectScope" : "completeRanking";
  const countryScope = isSubject ? "countrySubjectScope" : "countryOverallScope";
  els.scope.textContent = countryLabel
    ? t(countryScope).replace("{country}", countryLabel)
    : isWorld ? t(scope) : "Top 50";
  els.footnote.textContent = t(isSubject ? "subjectFootnote" : isWorld ? "worldFootnote" : "footnote");

  if (view === "national") renderNational(rows);
  else if (view === "graduate") renderGraduate(rows);
  else if (isWorld) {
    const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * pageSize;
    if (isSubject) renderSubjects(rows.slice(start, start + pageSize));
    else renderWorld(rows.slice(start, start + pageSize));
    els.pagination.hidden = rows.length === 0;
    els.previousPage.disabled = currentPage === 1;
    els.nextPage.disabled = currentPage === totalPages;
    els.previousPage.title = t("previousPage");
    els.previousPage.setAttribute("aria-label", t("previousPage"));
    els.nextPage.title = t("nextPage");
    els.nextPage.setAttribute("aria-label", t("nextPage"));
    els.pageInfo.textContent = t("pageOf")
      .replace("{current}", currentPage)
      .replace("{total}", totalPages);
  }
  if (!isWorld) els.pagination.hidden = true;
  els.empty.hidden = rows.length > 0;
  if (rows.length === 0) {
    const ranking = isSubject ? subjectRankings : worldRankings;
    const countryAbsent = countryLabel && !ranking.some((item) =>
      item.country === qsCountry && (!isSubject || !els.field.value || item.subject === els.field.value)
    );
    els.emptyMessage.textContent = countryAbsent
      ? t("countryEmpty").replace("{country}", countryLabel)
      : t("emptyState");
  }
}

function setView(nextView) {
  if (view === nextView) return;
  viewFilters.set(view, readFilters());
  view = nextView;
  if (isWorldView(nextView)) lastWorldView = nextView;
  else lastUsView = nextView;
  currentPage = 1;
  rebuildFilters(viewFilters.get(view));
  render();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    lang = button.dataset.lang;
    rebuildFilters(readFilters());
    render();
  });
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelectorAll("[data-section]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.section === "world" && !isWorldView()) setView(lastWorldView);
    if (button.dataset.section === "us" && isWorldView()) setView(lastUsView);
  });
});

[els.search, els.field, els.state, els.type].forEach((control) => {
  control.addEventListener("input", () => {
    if (control === els.state && isWorldView()) qsCountry = els.state.value;
    currentPage = 1;
    render();
  });
});

els.clearFilters.addEventListener("click", () => {
  if (isWorldView()) qsCountry = "";
  currentPage = 1;
  rebuildFilters();
  render();
  els.search.focus();
});

els.previousPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    render();
    document.querySelector(".table-wrap").scrollTop = 0;
  }
});

els.nextPage.addEventListener("click", () => {
  currentPage += 1;
  render();
  document.querySelector(".table-wrap").scrollTop = 0;
});

rebuildFilters();
render();
