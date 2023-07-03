#Simple nerual network for recommendation system
#Input data: user_id, item_id, likeActions
#likeActions are the actions that user like the item or view minimum 70% of the chapters of comic
#LikeActions is number of likeActions
#Output: probability of user like the item
#Output is a number between 0 and 1
#If output is greater than 0.65, create function to return True or False
#If output is greater than 0.65, return True
#If output is less than 0.65, return False

#Importing the libraries
import numpy as np

#import pytorch
import torch
import torch.nn as nn
import torch.nn.parallel
import torch.optim as optim
import torch.utils.data
from torch.autograd import Variable

#generate dataset for training from django database

