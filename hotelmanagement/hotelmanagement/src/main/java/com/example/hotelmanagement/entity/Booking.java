package com.example.hotelmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {
@Id
private long id;
private String name;
private String gender;
private String roomtype;
private String startdate;
private String enddate;
private long mobileno;
private int membercount;
private long amount;
private String paymentmode;




public Booking() {
	super();
}





public Booking(long id, String name, String gender, String roomtype, String startdate, String enddate, long mobileno,
		int membercount, long amount, String paymentmode) {
	super();
	this.id = id;
	this.name = name;
	this.gender = gender;
	this.roomtype = roomtype;
	this.startdate = startdate;
	this.enddate = enddate;
	this.mobileno = mobileno;
	this.membercount = membercount;
	this.amount = amount;
	this.paymentmode = paymentmode;
}





@Override
public String toString() {
	return "Booking [id=" + id + ", name=" + name + ", gender=" + gender + ", roomtype=" + roomtype + ", startdate="
			+ startdate + ", enddate=" + enddate + ", mobileno=" + mobileno + ", membercount=" + membercount
			+ ", amount=" + amount + ", paymentmode=" + paymentmode + "]";
}





public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getRoomtype() {
	return roomtype;
}
public void setRoomtype(String roomtype) {
	this.roomtype = roomtype;
}
public String getStartdate() {
	return startdate;
}
public void setStartdate(String startdate) {
	this.startdate = startdate;
}
public String getEnddate() {
	return enddate;
}
public void setEnddate(String enddate) {
	this.enddate = enddate;
}
public long getMobileno() {
	return mobileno;
}
public void setMobileno(long mobileno) {
	this.mobileno = mobileno;
}
public int getMembercount() {
	return membercount;
}
public void setMembercount(int membercount) {
	this.membercount = membercount;
}
public long getAmount() {
	return amount;
}
public void setAmount(long amount) {
	this.amount = amount;
}





public String getPaymentmode() {
	return paymentmode;
}





public void setPaymentmode(String paymentmode) {
	this.paymentmode = paymentmode;
}

	
}
