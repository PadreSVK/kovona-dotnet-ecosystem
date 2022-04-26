// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using TestLibrary;

namespace NetFramework
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            IEnumerable<string> test = null;
            Console.WriteLine("Hello, World! net472");
            Console.WriteLine(Class1.Test);
        }
    }
}
