---
id: doc4
title: Use Zeptron live streamer
---

## Basic usage

After installing Zeptron, use it to start and stop video streams from your terminal like this: 

`zeptron -i IP_ADDRESS -p PORT`

This starts the stream and points it to your model. 

Your model must be running. 

The IP address and port for your model are displayed on your instance dashboard. 

Access your active instances in Studio

---


## Usage for Raspberry Pi

We recommend the Raspberry Pi with a PiCamera to run the streamer from. We have found them to be a reliable and cost effecitve option with remarkable quality. 

You can buy one with a tough case that already has Zeptron and Dataplicity installed through our store. 

Dataplicity allows you to get into your Pi from anywhere in the world and start the streamer. For details on how to get started with Dataplicity, refer to their documentation here. 

To start Zeptron on a Raspberry Pi, simply run 

`pip install zeptron`

from the terminal to install it

then 

`zeptron -i IP_ADDRESS -p PORT -raspberry` 

to start the stream
