# KnowDisaster

KnowDisaster is an application that aims to prepare its users for the worst of natural disasters by predicting it's approximate occurrence, in real time. 

## The Central Idea
Provide a service to the people which aims at helping people deal with Natural Disasters, both before and after it occurs. KnowDisaster provides rescue teams with the location of people who may possibly be in danger, and who may be seeking help. It is also capable of providing the public with relief information in case a disaster happens.    

## Features
- The probability of occurrence of various disasters in the user's proximity
- Real-time weather data using users location 
- The fastest way to get to the nearest Relief centers if a disaster does strike 
- Sending relief information to people in an area of no/low internet connectivity 
- Generating a broadcasting message to send to users when not connected to the internet
- Capable of sending disaster relief information to the user as well as his/her friends and family even if they do not have KnowDisaster installed on their device
- Sends heat map of users in the affected area to the emergency response team. 

## How it works
- People who are not connected, receive relief information via SMS. People who receive alerts can choose to subscribe his/her friends or family to the service, by providing us with their phone number. This ensures that a very large number of people are reached. Users may opt out at any time.
- Using user location our backend presents the user with information about impending natural disasters if any.
- Disaster prediction is done using Support Vector Machines which classify results of Azure's Deep Learning engine and API's for weather data collection which is subject to post-processing.
- KnowDisaster also calculates the nearest public relief centers and provides directions to safely reach there.
- A broadcasting message is generated using NLP techniques like - speech to text, machine translation etc.

## Prediction strategy
The most important requirement for a prediction model is data collected from viable sources. In the area of natural disasters, data is scarce. To counter this we will gather our own data from various sources around the world. We will create a database of real-time weather metrics of natural disasters occurring in the world.
using this data we will apply *Divide and Conquer* method to analyze the collected data using machine learning algorithms like Logistic regression, Support Vector Machines, Decision trees etc. we will do all of this with Azure's ML studio which will also aid in easy deployment.

## Implementation
We are implementing our idea as a Web-App, and an Android/iOS app. The backend is a NodeJS/ExpressJS App, running on Azure. We use MongoDB for databasing. For the mobile App, we plan to use Flutter, which is Google's Mobile App SDK to build cross platform mobile apps. 
We call multiple APIs for weather data collection, and Google Maps API for displaying maps on both the Mobile App and the Web App. 
