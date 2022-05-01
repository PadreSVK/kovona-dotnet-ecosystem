// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using Net6.Json.Appsettings;
using Serilog;
using TestLibrary;

namespace Net6
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            void Test(string name)
            {
                var tt = name ?? throw new ArgumentNullException(nameof(name), "blablabla bl bla");

            }

            var foo = new Foo();

            Console.WriteLine("Hello, World! net6");
            Console.WriteLine(Class1.Test);

            var appsetting = new Appsetting();

            var collections = appsetting.MyAwesomeConfig.PeopleA;



            Log.Logger = new LoggerConfiguration().CreateLogger();
        }
    }
}
