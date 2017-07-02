var shell = require('shelljs'),
    prompt = require('prompt')

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}


prompt.get(['message'], function (err, result) {
   //
   // Log the results.
   //
   if (err) console.log('Automated Error!')

   deployment(result.message)
 })


 function deployment(message){
   shell.exec('git add .')
   shell.exec('git commit -m "'+message+'"')
   shell.exec('git push origin master', {async : true}, _pushGithub)
 }

 function _pushGithub(code, stdout, stderr){
   console.log('Try to deployment')
 }
