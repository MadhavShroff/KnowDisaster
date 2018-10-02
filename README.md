# KnowDisaster

KnowDisaster is an application that aims to prepare it's users for the worst of natural disasters by predicting it's approximate occourance, in real time. 

## Installation 
<download link>

# Features
  - Probablility of occourance of various disasters in the users proximity
  - Real time weather data using users location 
  - Fastest way to get to the nearest Relief centeres if a disaster does strike 
  - Sending relief information to people in area of no/low internet connectivity 
  - Generating a broadcasting message to send to users when not connected to the internet
  - Capable of sending disaster relief information to the user as welll as his/her friends and family even if they do not have KnowDisaster installed on their device

# How it works

  - Disaster prediction is done using Support Vector Machines which classify results of Azure's Deep Learnin engine and API's for weather data collection which is subject to post-processing.
  - Using user location our backend presents the user with information about impending natural disasters if any.
  - KnowDisaster also calculates the nearest public relief centers and provides directions to safely reach there.
  - Broadcasting message is generated using NLP techniques like - speechTotext, machine translastion etc.