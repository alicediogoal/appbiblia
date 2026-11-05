const fs=require('fs'),f='android/app/src/main/AndroidManifest.xml';
let x=fs.readFileSync(f,'utf8');
for(const p of ['POST_NOTIFICATIONS','SCHEDULE_EXACT_ALARM','USE_EXACT_ALARM']){
  if(!x.includes('android.permission.'+p))x=x.replace('<application','<uses-permission android:name="android.permission.'+p+'" />\n    <application');
}
fs.writeFileSync(f,x);
