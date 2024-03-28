# Machine Learning Deployment on Kubernetes

This repository contains resources and instructions for deploying machine learning models using Kubernetes, focusing on logistic regression algorithm.

## Overview

Machine learning deployment involves the process of taking a trained machine learning model and making it available for use in production environments. Kubernetes provides a platform for automating deployment, scaling, and managing containerized applications, offering flexibility and efficiency in deploying machine learning models at scale. Logistic Regression is a fundamental machine learning algorithm used for binary classification tasks, widely employed due to its simplicity and interpretability.

## Setting Up Kubernetes

To set up Kubernetes cluster on Google Cloud Platform (GCP), follow the instructions provided in the [Setting Up Kubernetes](#) section. You can configure the cluster with a single node for development or testing purposes, or with multiple nodes for scalability and fault tolerance in production environments. Managing node instances efficiently ensures optimal resource allocation and cost-effectiveness.

## Machine Learning Model Deployment

### Training and Exporting the Model

The process of training the machine learning model involves data preprocessing, splitting into training/validation/test sets, and evaluation using metrics like confusion matrix. The trained model is then exported for deployment.

### Creating Flask App and Dockerfile

A Flask application with user interface (UI) is
