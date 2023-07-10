from django import forms
from django.contrib.auth.models import User
from django.template.defaultfilters import filesizeformat
from django.core.exceptions import ValidationError

from .models import *

class RestrictedFileField(forms.FileField):
    """
    Same as FileField, but you can specify:
    * content_types - list containing allowed content_types. Example: ['application/pdf', 'image/jpeg']
    * max_upload_size - a number indicating the maximum file size allowed for upload.
        2.5MB - 2621440
        5MB - 5242880
        10MB - 10485760
        20MB - 20971520
        50MB - 5242880
        100MB - 104857600
        250MB - 214958080
        500MB - 429916160
"""
    def __init__(self, *args, **kwargs):
        self.content_types = kwargs.pop("content_types")
        self.max_upload_size = kwargs.pop("max_upload_size")

        super(RestrictedFileField, self).__init__(*args, **kwargs)

    def clean(self, data, initial=None):
        file = super(RestrictedFileField, self).clean(data, initial)

        try:
            content_type = file.content_type
            if content_type in self.content_types:
                if file._size > self.max_upload_size:
                    raise ValidationError(_('Please keep filesize under %s. Current filesize %s') % (
                        filesizeformat(self.max_upload_size), filesizeformat(file._size)))
            else:
                raise ValidationError(_('Filetype not supported.'))
        except AttributeError:
            pass

        return data
    

class addComicsForm(forms.ModelForm):
    title = forms.CharField(
        label='',
		max_length=70,
		min_length=4,
		required=True,
		widget=forms.TextInput(
				attrs={
					"placeholder": "*Название",
					"class": "w-full outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
				}
			)
		)
    description = forms.CharField(
        label='',
        max_length=3000,
		min_length=5,
		required=True,
		widget=forms.Textarea(
				attrs={
                    "style": "max-height:300px; min-height:70px; resize:none;",
					"placeholder": "*Описание",
					"class": " outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
				}
			)
    )
    # image = forms.ImageField(
    #      label = '',
    #      required=True,

    # )
    class Meta:
      model = Comic
      fields = ['title','description']

class addCommentForm(forms.ModelForm):
    comment_input = forms.CharField(label="", 
        widget=forms.Textarea(
        attrs={
            "id":"chat",
            "placeholder": "Оставить комментарий...",
            "class":"block p-2.5 bg-opacity-40 w-full overflow-hidden text-gray-200 outline-0 border-none outline-none rounded-lg bg-zinc-800 duraction-300 placeholder-gray-200 focus:bg-opacity-80 hover:bg-opacity-60 focus:ring-[#5fa9c1] placeholder:text-base placeholder:text-gray-200",
			# "class": "w-11/12 text-gray-200 placeholder:text-lg bg-zinc-800 ",
            "style":"max-height:400px; height:50px; resize:none;",
            "rows":"1"
        }
    ) )

    class Meta:
        model = Comment
        fields = ['comment_input']

class imageForm(forms.Form):
    image = forms.ImageField()