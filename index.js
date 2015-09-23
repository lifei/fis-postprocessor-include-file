module.exports = function(content, file, conf) {

  var fileReg = /<!--#include\ssrc="([^"]+)"\s*-->/gim;

  if(file.isHtmlLike){
    content = content.replace(fileReg,function(ret, src){
      src = fis.project.getProjectPath() + '/' + src;
      if (fis.util.isFile(src)) {
        var tpl = fis.file.wrap(src);
        return tpl.getContent();
      }
    });
  }

  return content;
};
