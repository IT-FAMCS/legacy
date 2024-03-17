from django.views.generic import DetailView, ListView
from django.views.generic.edit import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Department
from django.urls import reverse
from django.http import HttpResponseRedirect
from .forms import DepartmentForm

class DepartmentCreate(CreateView):
    model = Department
    fields = ['short_title', 'title']
    template_name = ""

class DepartmentList(LoginRequiredMixin, ListView):
    model = Department
    template_name = ""
    login_url = ""

class DepartmentDetailView(LoginRequiredMixin, DetailView):
    model = Department
    template_name = ""
    login_url = ""

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = DepartmentForm(instance=self.object)
        return context
    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = DepartmentForm(request.POST, instance=self.object)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('', args=[self.object.id]))
        else:
            return self.render_to_response(self.get_context_data(form=form))
