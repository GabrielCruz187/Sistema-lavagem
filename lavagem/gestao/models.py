from django.db import models

class Anotacao(models.Model):
    dia = models.CharField(max_length=10)  # Exemplo: 'Segunda'
    conteudo = models.TextField()

    def __str__(self):
        return f"{self.dia}: {self.conteudo[:20]}..."

class Conta(models.Model):
    STATUS_CHOICES = [
        ('paga', 'Paga'),
        ('nao_paga', 'Não Paga')
    ]
    descricao = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=8, choices=STATUS_CHOICES)

    def __str__(self):
        return f"{self.descricao} - {self.get_status_display()}"

class Faturamento(models.Model):
    data = models.DateField()
    valor = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Faturamento em {self.data}: {self.valor}"

class Despesa(models.Model):
    descricao = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.descricao} - {self.valor}"

