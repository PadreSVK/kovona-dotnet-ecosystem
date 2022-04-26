using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestLibrary
{
    public class Class1
    {
        public const string Test = "He;llllloo";


        public IEnumerable<string> Strings { get; set; }


        public Task<string> Abcde()
        {

            return Task.FromResult(""); 
        }
    }
}

