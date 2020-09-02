(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{215:function(t,i,v){"use strict";v.r(i);var _=v(28),a=Object(_.a)({},(function(){var t=this,i=t.$createElement,v=t._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"初始化git仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化git仓库"}},[t._v("#")]),t._v(" 初始化Git仓库")]),t._v(" "),v("ul",[v("li",[t._v("这个仓库会存放git对我们项目代码进行备份的文件")]),t._v(" "),v("li",[t._v("在项目目录右键打开git bash")]),t._v(" "),v("li",[t._v("命令: "),v("code",[t._v("git init")]),t._v("会生成.git目录 即我们的仓库")])]),t._v(" "),v("h2",{attrs:{id:"自报家门"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自报家门"}},[t._v("#")]),t._v(" 自报家门")]),t._v(" "),v("ul",[v("li",[t._v("就是在git中设置当前使用的用户是谁")]),t._v(" "),v("li",[t._v("每次备份代码到.git目录中都会把当前备份者的信息存储起来")]),t._v(" "),v("li",[t._v("命令:\n"),v("ul",[v("li",[t._v("配置用户名："),v("code",[t._v('git config --global user.name "wenliang"')])]),t._v(" "),v("li",[t._v("配置邮箱："),v("code",[t._v('git config --global user.email "419099632@qq.com"')])])])])]),t._v(" "),v("h2",{attrs:{id:"把代码存储到-git仓库中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#把代码存储到-git仓库中"}},[t._v("#")]),t._v(" 把代码存储到.git仓库中")]),t._v(" "),v("ul",[v("li",[t._v("1.把代码放到仓库门口\n"),v("ul",[v("li",[v("code",[t._v("git add ./readme.md")]),t._v("  把指定的文件添加到大门口")]),t._v(" "),v("li",[v("code",[t._v("git add ./")]),t._v(" 把当前目录下所有修改的文件添加到大门口")])])]),t._v(" "),v("li",[t._v("2.把仓储门口的代码放到里面的房间里去\n"),v("ul",[v("li",[v("code",[t._v('git commit -m "这是对这次添加东西的说明"')])])])])]),t._v(" "),v("h2",{attrs:{id:"可以一次性把我们修改的代码放到房间里（版本库），不需要先add再commit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可以一次性把我们修改的代码放到房间里（版本库），不需要先add再commit"}},[t._v("#")]),t._v(" 可以一次性把我们修改的代码放到房间里（版本库），不需要先add再commit")]),t._v(" "),v("ul",[v("li",[v("code",[t._v('git commit --all -m "一些说明"')]),t._v(" "),v("ul",[v("li",[t._v("--all 表示把所有修改的文件提交到版本库")])])])]),t._v(" "),v("h2",{attrs:{id:"查看当前的状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看当前的状态"}},[t._v("#")]),t._v(" 查看当前的状态")]),t._v(" "),v("ul",[v("li",[t._v("可以用来查看当前代码有没有被放到仓储中去")]),t._v(" "),v("li",[t._v("命令："),v("code",[t._v("git status")])])]),t._v(" "),v("h2",{attrs:{id:"git中的忽略文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git中的忽略文件"}},[t._v("#")]),t._v(" git中的忽略文件")]),t._v(" "),v("ul",[v("li",[t._v(".gitignore,在这个文件中可以设置要忽略的文件或目录")]),t._v(" "),v("li",[t._v("被忽略的文件不会被提交的仓库里去")]),t._v(" "),v("li",[t._v("在.gitignore中可以书写要忽略的文件的路径，以/开头，一行写一个路径，这些路径所对应的文件都会被忽略，不会被提交到仓储中\n"),v("ul",[v("li",[t._v("写法\n"),v("ul",[v("li",[v("code",[t._v("/.idea")]),t._v("      会忽略.idea文件")]),t._v(" "),v("li",[v("code",[t._v("/js")]),t._v("         会忽略js目录里的所有文件")]),t._v(" "),v("li",[v("code",[t._v("/js/*.js")]),t._v("    会忽略js目录里的所有js文件")])])])])])]),t._v(" "),v("h2",{attrs:{id:"查看日志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[t._v("#")]),t._v(" 查看日志")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git log")]),t._v(" 查看历史提交日志")]),t._v(" "),v("li",[v("code",[t._v("git log --oneline")]),t._v(" 可以查看简洁版的日志")])]),t._v(" "),v("h2",{attrs:{id:"回退到指定的版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回退到指定的版本"}},[t._v("#")]),t._v(" 回退到指定的版本")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git reset --hard Head~0")]),t._v(" "),v("ul",[v("li",[t._v("表示回退到上一次代码提交时的状态")])])]),t._v(" "),v("li",[v("code",[t._v("git reset --hard Head~1")]),t._v(" "),v("ul",[v("li",[t._v("表示回退到上上一次代码提交时的状态")])])]),t._v(" "),v("li",[v("code",[t._v("git reset --hard [版本号]")]),t._v(" "),v("ul",[v("li",[t._v("可以通过版本号精确的退回到某一个词")])])]),t._v(" "),v("li",[v("code",[t._v("git reflog")]),t._v(" "),v("ul",[v("li",[t._v("可以看到每一次切换版本的记录（切换和提交版本的记录），可以看到所有提交的版本号")])])])]),t._v(" "),v("h2",{attrs:{id:"分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),v("ul",[v("li",[t._v("默认是有一个主分支 master")])]),t._v(" "),v("h3",{attrs:{id:"创建分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[t._v("#")]),t._v(" 创建分支")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git branch dev")])])]),t._v(" "),v("ul",[v("li",[t._v("创建了一个dev分支")]),t._v(" "),v("li",[t._v("在刚创建的dev分支里的东西和master分支里的东西是一样的")])]),t._v(" "),v("h3",{attrs:{id:"切换分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git checkout dev")])])]),t._v(" "),v("ul",[v("li",[t._v("切换到指定的分支，这里的切换到名为dev的分支，\n"),v("code",[t._v("git branch")]),t._v("可以查看当前有哪些分支")])]),t._v(" "),v("h3",{attrs:{id:"合并分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git merge dev")])])]),t._v(" "),v("ul",[v("li",[t._v("合并分支内容，把当前分支与指定的分支（dev）进行合并")]),t._v(" "),v("li",[t._v("当前分支指的是"),v("code",[t._v("git branch")]),t._v("命令输出的前面有*号的分支")])]),t._v(" "),v("ul",[v("li",[t._v("合并时如果有冲突，需要手动去处理，处理后还需要再提交一次")])]),t._v(" "),v("h3",{attrs:{id:"github"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" Github")]),t._v(" "),v("ul",[v("li",[t._v("https://github.com  github不是git是一个网站提供了允许别人通过git上传代码的功能")])]),t._v(" "),v("h3",{attrs:{id:"提交代码到github（当作git服务器来用）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提交代码到github（当作git服务器来用）"}},[t._v("#")]),t._v(" 提交代码到github（当作git服务器来用）")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("git push [地址] master")])]),t._v(" "),v("li",[t._v("示例 ："),v("code",[t._v("git push https://github.com/WenLiang619/git_test.git master")])]),t._v(" "),v("li",[t._v("会把当前分支的内容上传到远程的master分支上")])]),t._v(" "),v("h3",{attrs:{id:"从github拉取代码到本地"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从github拉取代码到本地"}},[t._v("#")]),t._v(" 从github拉取代码到本地")]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("git pull [地址] master")])])]),t._v(" "),v("li",[v("p",[t._v("示例 ："),v("code",[t._v("git pull https://github.com/WenLiang619/git_test.git master")])])]),t._v(" "),v("li",[v("p",[t._v("会把远程分支的数据得到：（"),v("em",[t._v("注意本地要首先初始化一个仓储 git,用 git init")]),t._v("）")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("git clone [地址] --depth=1")])])]),t._v(" "),v("li",[v("p",[t._v("会得到远程仓库相同的数据，如果多次执行会覆盖本地内容 depth用于指定克隆深度，为1即表示只克隆最近一次commit")])])]),t._v(" "),v("h2",{attrs:{id:"push与pull操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#push与pull操作"}},[t._v("#")]),t._v(" push与pull操作")]),t._v(" "),v("ul",[v("li",[t._v("先pull, 再push 服务器版本有可能与本地版本不一样，所以要先拉取下来合并后再推到服务器上")])]),t._v(" "),v("h3",{attrs:{id:"简化push-pull"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简化push-pull"}},[t._v("#")]),t._v(" 简化push/pull")]),t._v(" "),v("ul",[v("li",[t._v("添加 origin变量"),v("code",[t._v("git remote add origin https://github.com/WenLiang619/git_test.git")])]),t._v(" "),v("li",[t._v("在当前目录下 可以这样push "),v("code",[t._v("git push origin master")]),t._v(" 这样pull "),v("code",[t._v("git pull origin master")])]),t._v(" "),v("li",[t._v("执行"),v("code",[t._v("git push origin -u master")]),t._v(" 后,git会把当前分支与远程分支做了关联， 下次一push时只要写"),v("code",[t._v("git push")]),t._v(", pull时只要写"),v("code",[t._v("git pull")])])]),t._v(" "),v("h2",{attrs:{id:"记录一次把程序上传github的过程-所在文件下打开shell依次执行下面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#记录一次把程序上传github的过程-所在文件下打开shell依次执行下面"}},[t._v("#")]),t._v(" 记录一次把程序上传github的过程,所在文件下打开shell依次执行下面")]),t._v(" "),v("ul",[v("li",[t._v("git init")]),t._v(" "),v("li",[t._v("git add ./")]),t._v(" "),v("li",[t._v("git commit -m 'first commit'")]),t._v(" "),v("li",[t._v('git config --global user.name "wenliang"')]),t._v(" "),v("li",[t._v('git config --global user.email "419099632@qq.com"')]),t._v(" "),v("li",[t._v("git commit -m 'first commit'")]),t._v(" "),v("li",[t._v("git status")]),t._v(" "),v("li",[t._v("git remote add origin https://github.com/WenLiang619/testlabmanagement.git")]),t._v(" "),v("li",[t._v("git push -u origin master")])]),t._v(" "),v("h4",{attrs:{id:"修改文件后执行下面指令更新仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#修改文件后执行下面指令更新仓库"}},[t._v("#")]),t._v(" 修改文件后执行下面指令更新仓库")]),t._v(" "),v("ul",[v("li",[t._v("git status")]),t._v(" "),v("li",[t._v("git add ./")]),t._v(" "),v("li",[t._v("git commit -m 'second'")]),t._v(" "),v("li",[t._v("git push")])])])}),[],!1,null,null,null);i.default=a.exports}}]);