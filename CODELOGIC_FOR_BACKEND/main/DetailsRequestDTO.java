package com.app.dto;

import java.time.LocalDate;


import com.app.pojo.User;

public class DetailsRequestDTO {
	
	private User user;
	private int weight;
	private int fastingSugar;
	private int postSugar;
	private int bloodPressure;
	private String otherDiseases;
	private LocalDate date;
	
	public DetailsRequestDTO() {
		super();
	}

	public DetailsRequestDTO(User user, int weight, int fastingSugar, int postSugar, int bloodPressure,
			String otherDiseases, LocalDate date) {
		super();
		this.user = user;
		this.weight = weight;
		this.fastingSugar = fastingSugar;
		this.postSugar = postSugar;
		this.bloodPressure = bloodPressure;
		this.otherDiseases = otherDiseases;
		this.date = date;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getFastingSugar() {
		return fastingSugar;
	}

	public void setFastingSugar(int fastingSugar) {
		this.fastingSugar = fastingSugar;
	}

	public int getPostSugar() {
		return postSugar;
	}

	public void setPostSugar(int postSugar) {
		this.postSugar = postSugar;
	}

	public int getBloodPressure() {
		return bloodPressure;
	}

	public void setBloodPressure(int bloodPressure) {
		this.bloodPressure = bloodPressure;
	}

	public String getOtherDiseases() {
		return otherDiseases;
	}

	public void setOtherDiseases(String otherDiseases) {
		this.otherDiseases = otherDiseases;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "DetailsRequestDTO [user=" + user + ", weight=" + weight + ", fastingSugar=" + fastingSugar
				+ ", postSugar=" + postSugar + ", bloodPressure=" + bloodPressure + ", otherDiseases=" + otherDiseases
				+ ", date=" + date + "]";
	}
	
	
	
}
