package org.inoutad.inouttad.models;

import java.io.*;

public class DataFromForm {
    private String name;
    private String email;
    private String phone;
    private String servSelect;


    public DataFromForm() {
    }

    public DataFromForm(String name, String email, String phone, String servSelect) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.servSelect = servSelect;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getServSelect() {
        return servSelect;
    }

    public void createAndSaveFile() throws IOException {
        BufferedWriter writer = new BufferedWriter(new FileWriter("dataFromForm.txt", true));
        writer.write("\nName: "+name+"\nE-mail: "+email+"\nPhone: "+phone+"\nService: "+servSelect+"\n");
        writer.flush();
        writer.close();
    }
}
