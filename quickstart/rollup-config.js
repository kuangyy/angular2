import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

/*
 摇树优化（Tree shaking）
 AOT编译为接下来通过一个叫做摇树优化的过程做好了准备。 摇树优化器从上到下遍历依赖图谱，并且摇掉用不到的代码，这些代码就像是圣诞树中那些死掉的松针一样。
 通过移除源码和库代码中用不到的部分，摇树优化可以大幅缩减应用的下载体积。 事实上，在小型应用中大部分的缩减都是因为筛掉了那些没用到的Angular特性。
*/
export default {
    entry: 'src/main.js',
    dest: 'src/build.js', // output a single application bundle
    sourceMap: false,
    format: 'iife',
    onwarn: function(warning) {
        // Skip certain warnings

        // should intercept ... but doesn't in some rollup versions
        if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

        // console.warn everything else
        console.warn( warning.message );
    },
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
            include: 'node_modules/rxjs/**',
        }),
        uglify()
    ]
}