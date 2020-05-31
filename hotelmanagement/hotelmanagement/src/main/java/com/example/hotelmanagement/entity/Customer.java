package com.example.hotelmanagement.entity;



import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customers")
public class Customer{
	@Id
	private long id;
	
	private String name;
	private String gender ;
	private long mobileNo ;
	private String roomtype;
	private String userid;
	private String password;
	private String address;
	
	
	
	
	public Customer(long id, String name, String gender, long mobileNo, String roomtype, String userid, String password,
			String address) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.mobileNo = mobileNo;
		this.roomtype = roomtype;
		this.userid = userid;
		this.password = password;
		this.address = address;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", gender=" + gender + ", mobileNo=" + mobileNo + ", roomtype="
				+ roomtype + ", userid=" + userid + ", password=" + password + ", address=" + address + "]";
	}
	
	public String getRoomtype() {
		return roomtype;
	}
	public void setRoomtype(String roomtype) {
		this.roomtype = roomtype;
	}
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
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
	public long getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}
	
	public Customer() {
		
	}
	public Customer(String name, String gender, long mobileNo) {
		super();
		this.name = name;
		this.gender = gender;
		this.mobileNo = mobileNo;
	}
	
	

}
