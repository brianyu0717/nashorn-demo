var fun1 = function(name) {
    print('Hi there from Javascript, ' + name);
    return "greetings from javascript";
};

var fun2 = function (object) {
    print("JS Class Definition: " + Object.prototype.toString.call(object));
};

// ======================================================================================

print('\n\n======================================================================================');
print('Calling Java Hasmhap demo');
print('======================================================================================');

var HashMap = Java.type("java.util.HashMap");
var userAndAge = new HashMap();
userAndAge.put("a", 1);
userAndAge.put("b", 2);
print(userAndAge.get("a"));

// ======================================================================================

print('\n\n======================================================================================');
print('Calling Java static method demo');
print('======================================================================================');

var NashornDemo = Java.type('NashornDemo');

var result = NashornDemo.fun1('John Doe');
print('\n');
print(result);

// ======================================================================================

NashornDemo.fun3({
    foo: 'bar',
    bar: 'foo'
});

// ======================================================================================

print('\n\n======================================================================================');
print('Java method calling Javascript function demo');
print('======================================================================================');


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var person1 = new Person("Peter", "Parker");
NashornDemo.fun4(person1);

print('\n\n======================================================================================');