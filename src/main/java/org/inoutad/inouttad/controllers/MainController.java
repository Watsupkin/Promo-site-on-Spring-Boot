package org.inoutad.inouttad.controllers;

import org.inoutad.inouttad.models.DataFromForm;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.util.regex.Pattern;

@Controller
public class MainController {
    final static String NAME = "^[А-ЯЁ][а-яё]*$";
    final static String EMAIL = "^(.+)@(\\S+)$";
    final static String PHONE = "^((\\+7|7|8)+([0-9]){10})$";

    @GetMapping("/inoutad")
    public String main(Model model){
        return "inoutad";
    }

    @PostMapping("/inoutad")
    public String getForm(Model model,
                          @RequestParam String name,
                          @RequestParam String email,
                          @RequestParam String phone,
                          @RequestParam String servSelect) throws IOException {
        if (check(NAME, name,true) && check(EMAIL, email,true) && check(PHONE, phone,false)) {
            new DataFromForm(name, email, phone, servSelect).createAndSaveFile();
            return "result";
        }
        return "badResult";
    }

    static boolean check(String rule, String text, boolean isInsensitive){
        Pattern myRule;
        if (isInsensitive){
            myRule = Pattern.compile(rule, Pattern.CASE_INSENSITIVE);
        } else {
            myRule = Pattern.compile(rule);
        }
        var res = myRule.matcher(text);
        return res.matches();
    }
}
