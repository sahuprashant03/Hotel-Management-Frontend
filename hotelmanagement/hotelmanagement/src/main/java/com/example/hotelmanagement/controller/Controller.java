package com.example.hotelmanagement.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.hotelmanagement.entity.Credential;
import com.example.hotelmanagement.entity.Customer;
import com.example.hotelmanagement.service.CustomerDaoService;
import com.example.hotelmanagement.service.UserServiceJPA;
import com.sun.el.stream.Optional;


 
 @RestController
 @RequestMapping("/")
public class Controller {
	
	/*@Autowired
	private CustomerDaoService customerDaoService;*/
	@Autowired
	private UserServiceJPA userServiceJpa;
	
	@ModelAttribute
	public void setResponseHeader(HttpServletResponse response){
	response.setHeader("Access-Control-Allow-Origin","*");
	response.setHeader("Access-Control-Allow-Header","Origin,X-Requested-With, Content-Type, Accept");
	}
	@RequestMapping(value="adminLogin",method=RequestMethod.POST)
    public String adminlogin(@RequestBody String credential) {
		
		JSONObject jsonObject = new JSONObject(credential);
		String userid = jsonObject.getString("userid");
		String password = jsonObject.getString("password");
		String str="";
    	
    	if(userid.equals("sahu@123") && password.equals("1234"))
    	{
    	List<Customer> customers = new ArrayList<>();
    	for(Customer cus : userServiceJpa.findAll()) {
    		str= str+ cus.toString() +"\n";
    	    }
    	return str;
    	}
    	else {
    		return "Incorrect UserId or Password !";
    	}
    }
	
	@RequestMapping(value="test1")
	public String test1() {
		
	
		return "success";
	}
	
	@RequestMapping(value="test2")
	public Customer test2(@RequestBody String str) {
		Customer cus = new Customer(1,"prashant","male",12333,"gold","asf","dchvdsjhc","fhvsdfh");
		//String r = str.replace("\"", "");
		JSONObject jsonObject = new JSONObject(str);
	String name = jsonObject.getString("name");
		
		return cus;
	}
	@RequestMapping(value="useridCheck",method=RequestMethod.POST)
    public String useridCheck(@RequestBody String userid) {
    	JSONObject jsonObject = new JSONObject(userid);
		String user = jsonObject.getString("userid");
		
    	
    	for(Customer cus : userServiceJpa.findAll()) {
    		if(user.equals(cus.getUserid())) {
    			return "success";
    		}
    	}
    	return "failed";
    }
	
    
    @RequestMapping(value="removeCustomer",method=RequestMethod.POST)
    public String removeCustomer(@RequestBody String id) {
    	JSONObject jsonObject = new JSONObject(id);
    	Long id1 = jsonObject.getLong("id");
    	try {
    	for(Customer cus : userServiceJpa.findAll()) {
    		if(cus.getId()==id1) {
    			userServiceJpa.deleteById(id1);
    			return "Customer removed successfully!";
    		} }
    	}catch(Exception e) {
    		return e.getMessage();
    	};
    	   
    return "Id not found";
    }
    	
    	
    @RequestMapping(value="userLogin",method=RequestMethod.POST)
    public String userlogin(@RequestBody String credential) {
    	JSONObject jsonObject = new JSONObject(credential);
		String userid = jsonObject.getString("userid");
		String password = jsonObject.getString("password");
		String str="";
    		
    	List<Customer> customers = new ArrayList<>();
    	for(Customer cus : userServiceJpa.findAll()) {
    		if(userid.equals(cus.getUserid())&& password.equals(cus.getPassword())) {
    			return "success";
    		}
    	}
    	return "failed";
    }
    @RequestMapping(value="createCustomer", method=RequestMethod.POST)
	public String createCustomer(@RequestBody String customer) {
		try{ long count = userServiceJpa.count();
		JSONObject jsonObject = new JSONObject(customer);
		long id=count+1;
		 String name = jsonObject.getString("name");
		 
		 String gender  = jsonObject.getString("gender");
		 long mobileNo  = jsonObject.getLong("mobileno");
		// String roomtype = jsonObject.getString("roomtype");
		 String userid = jsonObject.getString("userid");
		 String password = jsonObject.getString("password");
		 String address = jsonObject.getString("address");
		 
		 Customer cus = new Customer(id,name,gender,mobileNo,"",userid,password,address);
	      userServiceJpa.save(cus);}
	    catch(Exception e) {
		return e.getMessage();
	       };
	 return "Customer Id created successfully!";
		 
	}
    
}