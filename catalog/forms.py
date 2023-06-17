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
		max_length=70,
		min_length=4,
		required=True,
		widget=forms.TextInput(
				attrs={
					"placeholder": "Название",
					"class": "w-full mx-12 my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
				}
			)
		)
    description = forms.CharField(
        max_length=3000,
		min_length=5,
		required=True,
		widget=forms.TextInput(
				attrs={
					"placeholder": "Описание",
					"class": "w-full mx-12 my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
				}
			)
    )

    class Meta:
      model = Comic
      fields = ['title','description','image']

class addCommentForm(forms.ModelForm):
    comment_input = forms.CharField(label="", widget=forms.Textarea(
        attrs={
            "placeholder": "Комментарий",
			"class": "w-full text-gray-200 mx-2 bg-zinc-800 outline-0 outline-none outline-transparent border-none rounded-md"
        }
    ) )

    class Meta:
        model = Comment
        fields = ['comment_input']

class imageForm(forms.Form):
    image = forms.ImageField()