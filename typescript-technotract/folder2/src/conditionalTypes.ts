//conditional types
type a1=null;
type b1=undefined;

type x= a1 extends null? true :false  //true //x is a conditional type

type y= a1 extends null ? true : b1 extends undefined? undefined :any //undefined
