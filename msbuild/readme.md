# MSBuild

* Directory.Build.Props
* Directory.Build.Targets
* https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild-targets?view=vs-2019
* Directory.Packages.props

## MS Build groups

* Content  Include/Remove
* None Include/Remove
* Compile => .cs files

## MSBuild structured log viewer

> msbuild .... /bl

* https://msbuildlog.com/
* fulltext search
* missing targets,values of msbuild variables etc...

## MS Build props

* /p:ABCD="value"

## Others

* run only specific target
  * `msbuild /t:Targetname`
* empty Directory.Build.props
