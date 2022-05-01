using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Net6
{
    class Foo
    {
       void M1()
       {
       } // RCS0010
       void M2()
       {
       } // RCS0010
       /// <summary>
       /// ...
       /// </summary>
       void M3()
       {
       } // RCS0010
       string P1 { get; set; } // RCS0010
       [Obsolete]
       string P2 { get; set; }
    } // RCS0010
    enum Bar
    {
       A = 0, // RCS0010
       /// <summary>
       /// ...
       /// </summary>
       B = 1, // RCS0010
       [Obsolete]
       C = 2,
    }
}
