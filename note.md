Promise

Observable

Subject




使用预编译模式

```
npm install @angular/compiler-cli @angular/platform-server --save

ngc需要自己的带有AOT专用设置的tsconfig.json。 
把原始的tsconfig.json拷贝到一个名叫tsconfig-aot.json的文件中

{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": ["es2015", "dom"],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  },
  "angularCompilerOptions": {
   "genDir": "aot",
   "skipMetadataEmit" : true
 }
}

node_modules/.bin/ngc -p tsconfig-aot.json

Windows用户应该双引号ngc命令：
"node_modules/.bin/ngc" -p tsconfig-aot.json

在ngc完成时，会在aot目录下看到一组NgFactory文件
（该目录是在tsconfig-aot.json的genDir属性中指定的）。

```


