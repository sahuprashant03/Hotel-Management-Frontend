package com.example.hotelmanagement.entity;

public class Credential {
private String userid;
private String password;
public String getUserid() {
	return userid;
}
public void setUserid(String userid) {
	this.userid = userid;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public Credential(String userid, String password) {
	super();
	this.userid = userid;
	this.password = password;
}

}
