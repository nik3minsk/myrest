package by.bg.myrest.controller;


import by.bg.myrest.WebConfig;
import by.bg.myrest.entity.Cat;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MainController {

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/api/main")
    public String mainListener(){
        return "Hello World!";
    }

    @GetMapping("/api/cat")
    public String giveCatListener(){
        Cat cat = new Cat("Barsik", 5, 10);
        String jsonData = null;
        try {
            jsonData = objectMapper.writeValueAsString(cat);
        } catch (JsonProcessingException e) {
//            throw new RuntimeException(e);
            System.out.println("Error with cat class e = " + e);
        }
        return jsonData;
    }

    @PostMapping("/api/special")
    public String giveCatListenerPost(@RequestParam String name){
        Cat cat = new Cat(name, 5, 10);
//        Cat cat1 = new Cat(name, 5, 10);

        String jsonData = null;
        try {
            jsonData = objectMapper.writeValueAsString(cat);
        } catch (JsonProcessingException e) {
//            throw new RuntimeException(e);
            System.out.println("Error with cat class e = " + e);
        }
        return jsonData;

    }

}
