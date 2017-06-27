import jdk.nashorn.api.scripting.ScriptObjectMirror
import org.apache.commons.io.IOUtils
import java.time.LocalDateTime
import java.util.*
import javax.script.Invocable
import javax.script.ScriptEngineManager

class NashornDemo {

    companion object {
        fun fun1(name: String): String {
            System.out.format("Hi there from Java, %s", name)
            return "greetings from java"
        }

        fun fun3(mirror: ScriptObjectMirror) {
            println(mirror.className + ": " +
                    Arrays.toString(mirror.getOwnKeys(true)))
        }

        fun fun4(person: ScriptObjectMirror) {
            println("Full Name is: " + person.callMember("getFullName"))
        }
    }
}

fun main(args: Array<String>) {

    val engine = ScriptEngineManager().getEngineByName("nashorn")
    val script = IOUtils.toString(NashornDemo::class.java.classLoader.getResourceAsStream("script.js"), "UTF-8")
    engine.eval(script)
    val invocable = engine as Invocable

    val result = invocable.invokeFunction("fun1", "Peter Parker")
    println(result)
    println(result.javaClass)

    invocable.invokeFunction("fun2", LocalDateTime.now())


}
