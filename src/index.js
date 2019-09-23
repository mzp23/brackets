module.exports = function check(str, bracketsConfig) {
      const re = /(\|\|)|(\(\))|(\{\}|(\[\]))|12|34|56|77|88/;
      while (re.test(str)) {
        str = str.replace(re, "");
      }        
      return !str; 
}
