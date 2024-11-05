from django.contrib import admin
from .models import Anotacao, Conta, Faturamento, Despesa

admin.site.register(Anotacao)
admin.site.register(Conta)
admin.site.register(Faturamento)
admin.site.register(Despesa)

